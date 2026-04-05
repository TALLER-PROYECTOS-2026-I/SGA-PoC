import React, { useState } from "react";
import logoUSMP from '../assets/logo_FIA.png';

const Silabus = ({ cambiarVista }: any) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const archivos = [
    { nombre: "Taller de Proyectos", url: "/pdfs/taller.pdf" },
    { nombre: "Base de Datos", url: "/pdfs/bd.pdf" }
  ];

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
          <img src={logoUSMP} />
        </div>

        <ul className="menu">
          <li>👤 Perfil</li>
          <li>👨‍🏫 Docentes</li>
          <li>📄 Sílabus</li>
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

          <h2>📄 Lista de Sílabus</h2>

          {/* LISTA */}
          <div className="silabus-container">
            {archivos.map((file, i) => (
              <div key={i} className="silabus-card">
                <p>📘 {file.nombre}</p>
                <button onClick={() => window.open(file.url)}>
                  Ver PDF
                </button>
              </div>
            ))}
          </div>

          {/* BOTÓN */}
          <div className="botones">
            <button onClick={() => cambiarVista("dashboard")}>
              ⬅ Volver
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Silabus;