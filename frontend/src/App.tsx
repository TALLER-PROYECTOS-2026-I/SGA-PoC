import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { msalConfig } from "./auth/msalConfig";
import "./App.css";
import logoUSMP from "./assets/logo_usmp.png";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import AdminHome from "./components/AdminHome";
import UsuariosView from "./components/UsuariosView";
import SilabosView from "./components/SilabosView";
import FacultadesView from "./components/FacultadesView";
import ConfiguracionView from "./components/ConfiguracionView";

const msalInstance = new PublicClientApplication(msalConfig);

function LoginView() {
  const { instance, accounts } = useMsal();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleMicrosoftLogin = async () => {
    try {
      await instance.loginRedirect({
        scopes: ["user.read"],
      });
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Completa el correo y la contraseña");
      return;
    }

    const nombreSimulado = email.split("@")[0];
    setUser(nombreSimulado);
    console.log("Login manual simulado:", { email, password });
  };

  const handleLogout = () => {
    setUser("");
    setEmail("");
    setPassword("");
    localStorage.removeItem("token");
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

  if (user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route
            path="/admin"
            element={
              <AdminDashboard
                user={user}
                onLogout={handleLogout}
              />
            }
          >
            <Route index element={<AdminHome />} />
            <Route path="usuarios" element={<UsuariosView />} />
            <Route path="silabos" element={<SilabosView />} />
            <Route path="facultades" element={<FacultadesView />} />
            <Route path="configuracion" element={<ConfiguracionView />} />
          </Route>
        </Routes>
      </BrowserRouter>
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
          <div className="login-box">
            <img
              src={logoUSMP}
              alt="USMP"
              className="usmp-logo"
            />

            <h2>INICIAR SESIÓN</h2>

            <form className="login-form" onSubmit={handleManualLogin}>
              <div className="input-group">
                <label>Correo institucional</label>
                <input
                  type="email"
                  placeholder="usuario@usmp.pe"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="login-button">
                Iniciar sesión
              </button>
            </form>

            <div className="login-divider">
              <span>o</span>
            </div>

            <button
              onClick={handleMicrosoftLogin}
              className="login-button microsoft-button"
            >
              Iniciar sesión con Microsoft 365
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <LoginView />
    </MsalProvider>
  );
}export default App;