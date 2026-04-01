import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { msalConfig } from "./auth/msalConfig";
import "./App.css";
import logoUSMP from "./assets/logo_usmp.png";

const msalInstance = new PublicClientApplication(msalConfig);

function LoginView() {
  const { instance, accounts } = useMsal();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const response = await instance.handleRedirectPromise();

        if (response) {
          const name = response.account?.name || "";
          setUser(name);

          if (response.accessToken) {
            localStorage.setItem("token", response.accessToken);
            console.log("JWT:", response.accessToken);
          }

          console.log("Usuario:", name);
        } else if (accounts.length > 0) {
          const name = accounts[0]?.name || "";
          setUser(name);
          console.log("Usuario:", name);
        }
      } catch (error) {
        console.error("Error procesando redirect:", error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [instance, accounts]);

  const handleLogin = async () => {
    try {
      await instance.loginRedirect({
        scopes: ["user.read"],
      });
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  if (loading) {
    return (
      <div className="login-page">
        <div className="login-left">
          <div className="overlay">
            <h1 className="brand-title">DESCUBRE</h1>
            <h2 className="brand-subtitle">NUESTRO CÍRCULO</h2>
          </div>
        </div>

        <div className="login-right">
          <div className="login-card">
            <h2>Cargando...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="overlay">
          <h1 className="brand-title">DESCUBRE</h1>
          <h2 className="brand-subtitle">NUESTRO CÍRCULO</h2>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <img
              src={logoUSMP}
              alt="USMP"
              className="usmp-logo"
            />

          {!user ? (
            <>
              <h2>INICIAR SESIÓN</h2>
              <button onClick={handleLogin} className="login-button">
                Iniciar sesión con Microsoft 365
              </button>
            </>
          ) : (
            <>
              <h2>BIENVENIDO</h2>
              <p className="user-name">{user}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <LoginView />
    </MsalProvider>
  );
}

export default App;