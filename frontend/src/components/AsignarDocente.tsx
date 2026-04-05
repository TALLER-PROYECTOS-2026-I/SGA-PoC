import React, { useState } from "react";
import logoUSMP from '../assets/logo_FIA.png';

const AsignarDocente = ({ cambiarVista }: any) => {
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

          <h3> 👨‍🏫 Asignación de docentes:</h3>

          {/* FORM */}
          
          <div className="form-card">

            
<label>1. Nombre del docente</label>
            
            <input placeholder="Ingrese nombre completo del docente" />
            

            <label>2. Asignatura</label>
            <input placeholder="Ej: Base de Datos" />

            <div className="row">
              <div>
                <label>3. Código</label>
                <input placeholder="Ej: BD101" />
              </div>

              <div>
                <label>4. Periodo</label>
                <input placeholder="Ej: 2026-I" />
              </div>
            </div>

            <label>5. Mensaje</label>
            <textarea placeholder="Escriba un mensaje..."></textarea>

          </div>

          {/* BOTONES */}
          <div className="botones">
            <button onClick={() => cambiarVista("dashboard")}>⬅ Volver</button>
            <button>📨 Enviar</button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AsignarDocente;