import React, { useState } from "react";
import logoUSMP from '../assets/Logo_FIA.png';

const Dashboard = ({ irAsignar, irSilabus, irPerfil, cambiarVista }: any) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarSesion = () => {
    const confirmar = window.confirm("¿Desea cerrar sesión?");
    if (confirmar) {
      cambiarVista("login");
    }
  };

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-container">
          <img src={logoUSMP} alt="USMP Logo" />
        </div>

        <ul className="menu">
          <li onClick={() => irPerfil("perfil")}>
            <span className="menu-icon">👤</span>
            Perfil
          </li>

          <li onClick={irPerfil}>
            <span className="menu-icon">👨‍🏫</span>
            Docentes
          </li>

          <li onClick={irSilabus}>
            <span className="menu-icon">📄</span>
            Sílabus
          </li>
        </ul>
      </aside>

      {/* MAIN */}
      <main className="main">
        <div className="main-content">

          {/* HEADER */}
          <div className="header">
            <div 
              className="user-menu"
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              👤 Director ⌄

              {menuAbierto && (
                <div className="dropdown">
                  <p onClick={cerrarSesion}>Cerrar sesión</p>
                </div>
              )}
            </div>
          </div>

          {/* BIENVENIDA */}
          <div className="welcome">
            <h2>Bienvenido al Sistema Académico - Perfil Director</h2>
          </div>

          {/* CARDS */}
          <div className="cards">
            <div className="card" onClick={() => irPerfil("perfil")}>
              <div className="icon user">👤</div>
              <p>Perfil</p>
            </div>

            <div className="card" onClick={irAsignar}>
              <div className="icon plus">＋</div>
              <p>Asignar Docente</p>
            </div>

            <div className="card" onClick={irSilabus}>
              <div className="icon check">✔</div>
              <p>Sílabus</p>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
};

export default Dashboard; 