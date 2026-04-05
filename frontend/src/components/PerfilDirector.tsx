import React, { useState } from "react";
import logoUSMP from '../assets/logo_FIA.png';

const PerfilDirector = ({ cambiarVista }: any) => {
  const [editando, setEditando] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const [datos, setDatos] = useState({
    nombre: "Luis Palacios Quischiz",
    grado: "Ing. Software",
    correo: "luis_palacios@usmp.pe",
    telefono: "930 779 798",
  });

  const handleChange = (e: any) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const guardar = () => {
    setEditando(false);
    setMensaje("✅ Datos guardados correctamente");

    setTimeout(() => {
      setMensaje("");
    }, 3000);
  };

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
            <div className="user-menu" onClick={() => setMenuAbierto(!menuAbierto)}>
              👤 Director ⌄

              {menuAbierto && (
                <div className="dropdown">
                  <p onClick={cerrarSesion}>Cerrar sesión</p>
                </div>
              )}
            </div>
          </div>

          <h2>Perfil Director</h2>

          {/* PERFIL */}
          <div className="perfil-container">

            <div className="foto-perfil">
              <div className="avatar-grande">👤</div>
            </div>

            <div className="form-perfil">

              <label>Nombre Completo</label>
              <input name="nombre" value={datos.nombre} onChange={handleChange} disabled={!editando} />

              <div className="row">
                <div>
                  <label>Grado</label>
                  <input name="grado" value={datos.grado} onChange={handleChange} disabled={!editando} />
                </div>

                <div>
                  <label>Correo</label>
                  <input name="correo" value={datos.correo} onChange={handleChange} disabled={!editando} />
                </div>
              </div>

              <label>Número Telefónico</label>
              <input name="telefono" value={datos.telefono} onChange={handleChange} disabled={!editando} />

            </div>
          </div>

          {/* MENSAJE */}
          {mensaje && <p className="mensaje-ok">{mensaje}</p>}

          {/* BOTONES */}
          <div className="botones">
            <button onClick={() => cambiarVista("dashboard")}>Volver</button>

            {!editando ? (
              <button onClick={() => setEditando(true)}>Editar</button>
            ) : (
              <button onClick={guardar}>Guardar</button>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

export default PerfilDirector;