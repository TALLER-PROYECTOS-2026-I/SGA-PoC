import { useState } from "react";

function UsuariosView() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page-container">
      <div className="page-header page-header-enhanced">
        <div className="page-title-block">
          <span className="page-badge">Panel administrativo</span>
          <h1>Gestión de Usuarios</h1>
          <div className="title-underline"></div>
          <p>
            Gestiona el acceso, los roles y el estado de los usuarios del sistema académico.
          </p>
        </div>

        <button className="primary-button" onClick={() => setShowModal(true)}>
          + Nuevo usuario
        </button>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>120</h3>
          <p>Usuarios activos</p>
        </div>
        <div className="summary-card">
          <h3>15</h3>
          <p>Administradores</p>
        </div>
        <div className="summary-card">
          <h3>32</h3>
          <p>Docentes</p>
        </div>
      </div>

      <div className="toolbar">
        <input type="text" placeholder="Buscar usuario..." />
        <select>
          <option>Todos los roles</option>
          <option>Administrador</option>
          <option>Director</option>
          <option>Docente</option>
        </select>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Pérez</td>
              <td>juan.perez@usmp.pe</td>
              <td>Administrador</td>
              <td>
                <span className="status active">Activo</span>
              </td>
              <td>
                <button className="table-btn">Editar</button>
                <button className="table-btn danger">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>María López</td>
              <td>maria.lopez@usmp.pe</td>
              <td>Director</td>
              <td>
                <span className="status active">Activo</span>
              </td>
              <td>
                <button className="table-btn">Editar</button>
                <button className="table-btn danger">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>Carlos Ramos</td>
              <td>carlos.ramos@usmp.pe</td>
              <td>Docente</td>
              <td>
                <span className="status inactive">Inactivo</span>
              </td>
              <td>
                <button className="table-btn">Editar</button>
                <button className="table-btn danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h2>Registrar nuevo usuario</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            <form className="modal-form">
              <div className="form-group">
                <label>Nombre completo</label>
                <input type="text" placeholder="Ingrese el nombre completo" />
              </div>

              <div className="form-group">
                <label>Correo institucional</label>
                <input type="email" placeholder="usuario@usmp.pe" />
              </div>

              <div className="form-group">
                <label>Rol</label>
                <select>
                  <option>Seleccione un rol</option>
                  <option>Administrador</option>
                  <option>Director</option>
                  <option>Docente</option>
                </select>
              </div>

              <div className="form-group">
                <label>Estado</label>
                <select>
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className="primary-button">
                  Guardar usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UsuariosView;