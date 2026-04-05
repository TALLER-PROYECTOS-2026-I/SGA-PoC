import React, { useState } from "react";
import logoUSMP from '../assets/logo_usmp.png'; // Asegúrate de tener el logo aquí

const Login = ({ onLogin }: any) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [recuerdame, setRecuerdame] = useState(false);

  const handleLogin = () => {
    // Simulación de login
    if (usuario === "director@usmp.pe" && password === "1234") {
      onLogin();
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <img src={logoUSMP} alt="Logo USMP" className="login-logo" />

        <h2>Iniciar Sesión</h2>

        {/* Texto de prueba */}
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "15px" }}>
          Usuario: <b>director@usmp.pe</b> | Contraseña: <b>1234</b>
        </p>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Recuérdame y Olvidaste contraseña */}
        <div className="login-options">
          <label>
            <input
              type="checkbox"
              checked={recuerdame}
              onChange={() => setRecuerdame(!recuerdame)}
            />{" "}
            Recuérdame
          </label>
          <a href="#" onClick={(e) => e.preventDefault()}>
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Mensaje de error */}
        {error && <p className="error">{error}</p>}

        {/* Botón Ingresar */}
        <button onClick={handleLogin}>Ingresar</button>
      </div>
    </div>
  );
};

export default Login;