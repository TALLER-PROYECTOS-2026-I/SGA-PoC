import React, { useState } from "react";
import logoUSMP from '../assets/logo_usmp.png';

interface PerfilDirectorProps {
  cambiarVista: (vista: string) => void;
}

const PerfilDirector: React.FC<PerfilDirectorProps> = ({ cambiarVista }) => {
  const [editando, setEditando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [datos, setDatos] = useState({
    nombre: "Luis Palacios Quischiz",
    grado: "Ing. Software",
    correo: "luis_palacios@usmp.pe",
    telefono: "930 779 798",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    setEditando(false);
    setMensaje("Datos actualizados correctamente");
    setTimeout(() => setMensaje(""), 3000);
  };

  const handleCerrarSesion = () => {
    setMenuAbierto(false); // cierra el menú
    cambiarVista("login"); // cambia la vista a Login.tsx
  };

  return (
    <div className="perfil-director">
      <aside className="sidebar">
        <h2 className="logo">
          <img src={logoUSMP} alt="USMP Logo" style={{ width: '120px', height: 'auto' }} />
        </h2>
        <ul>
          <li>Perfil</li>
          <li>Docentes</li>
          <li>Silabus</li>
        </ul>
      </aside>

      <main className="main">
        <div className="header">
          <div className="user-menu" onClick={() => setMenuAbierto(!menuAbierto)}>
            👤 {datos.nombre} ⌄
            {menuAbierto && (
              <div className="dropdown">
                <p className="item" onClick={handleCerrarSesion}>
                  Cerrar sesión
                </p>
              </div>
            )}
          </div>
        </div>

        <h2>Perfil Director</h2>

        <div className="perfil-box">
          <div className="avatar"></div>
          <div className="form">
            <label>Nombre Completo</label>
            <input
              name="nombre"
              value={datos.nombre}
              onChange={handleChange}
              disabled={!editando}
            />

            <div className="row">
              <div>
                <label>Grado</label>
                <input
                  name="grado"
                  value={datos.grado}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div>
                <label>Correo</label>
                <input
                  name="correo"
                  value={datos.correo}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>
            </div>

            <label>Numero Telefonico</label>
            <input
              name="telefono"
              value={datos.telefono}
              onChange={handleChange}
              disabled={!editando}
            />
          </div>
        </div>

        {mensaje && <p className="mensaje">{mensaje}</p>}

        <div className="botones">
          <button onClick={() => cambiarVista("dashboard")}>Volver</button>
          {!editando ? (
            <button className="editar" onClick={() => setEditando(true)}>
              Editar
            </button>
          ) : (
            <button className="guardar" onClick={handleGuardar}>
              Guardar
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default PerfilDirector;