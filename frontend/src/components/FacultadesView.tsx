import { useState } from "react";

function FacultadesView() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page-container">
      <div className="page-header page-header-enhanced">
        <div className="page-title-block">
          <span className="page-badge">Panel institucional</span>
          <h1>Gestión de Facultades</h1>
          <div className="title-underline"></div>
          <p>
            Administra las facultades registradas, sus responsables y su estado
            dentro del sistema académico.
          </p>
        </div>

        <button className="primary-button" onClick={() => setShowModal(true)}>
          + Nueva facultad
        </button>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>8</h3>
          <p>Facultades registradas</p>
        </div>
        <div className="summary-card">
          <h3>7</h3>
          <p>Facultades activas</p>
        </div>
        <div className="summary-card">
          <h3>1</h3>
          <p>En revisión</p>
        </div>
        <div className="summary-card">
          <h3>24</h3>
          <p>Escuelas vinculadas</p>
        </div>
      </div>

      <div className="toolbar">
        <input type="text" placeholder="Buscar facultad..." />

        <select>
          <option>Todos los estados</option>
          <option>Activa</option>
          <option>En revisión</option>
          <option>Inactiva</option>
        </select>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Facultad</th>
              <th>Responsable</th>
              <th>Estado</th>
              <th>Escuelas</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ingeniería y Arquitectura</td>
              <td>Dr. Ramírez</td>
              <td>
                <span className="status active">Activa</span>
              </td>
              <td>6</td>
              <td>
                <button className="table-btn">👁 Ver</button>
                <button className="table-btn">✏ Editar</button>
              </td>
            </tr>

            <tr>
              <td>Ciencias Contables</td>
              <td>Dra. Flores</td>
              <td>
                <span className="status pending">En revisión</span>
              </td>
              <td>4</td>
              <td>
                <button className="table-btn">👁 Ver</button>
                <button className="table-btn">✏ Editar</button>
              </td>
            </tr>

            <tr>
              <td>Derecho</td>
              <td>Mg. Salazar</td>
              <td>
                <span className="status inactive">Inactiva</span>
              </td>
              <td>3</td>
              <td>
                <button className="table-btn">👁 Ver</button>
                <button className="table-btn">✏ Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h2>Registrar nueva facultad</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            <form className="modal-form">
              <div className="form-group">
                <label>Nombre de la facultad</label>
                <input type="text" placeholder="Ingrese el nombre de la facultad" />
              </div>

              <div className="form-group">
                <label>Responsable</label>
                <input type="text" placeholder="Ingrese el nombre del responsable" />
              </div>

              <div className="form-group">
                <label>Estado</label>
                <select>
                  <option>Activa</option>
                  <option>En revisión</option>
                  <option>Inactiva</option>
                </select>
              </div>

              <div className="form-group">
                <label>Cantidad de escuelas</label>
                <input type="number" placeholder="Ingrese la cantidad de escuelas" />
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
                  Guardar facultad
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FacultadesView;