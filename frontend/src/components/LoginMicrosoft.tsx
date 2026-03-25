import { useMsal } from "@azure/msal-react";
import { useState } from "react";

export default function LoginMicrosoft() {
  const { instance } = useMsal();
  const [user, setUser] = useState("");

  const handleLogin = async () => {
    try {
      const response = await instance.loginPopup({
        scopes: ["user.read"],
      });

      const name = response.account?.name || "";
      setUser(name);

      localStorage.setItem("token", response.accessToken);

      console.log("JWT:", response.accessToken);
      console.log("Usuario:", name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {!user ? (
        <>
          <h1>INICIAR SESIÓN</h1>
          <button onClick={handleLogin}>
            Iniciar sesión con Microsoft 365
          </button>
        </>
      ) : (
        <h2>Bienvenido {user}</h2>
      )}
    </div>
  );
}