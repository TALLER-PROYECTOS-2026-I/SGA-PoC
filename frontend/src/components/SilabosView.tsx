import { useState } from "react";

function SilabosView() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page-container">

      <div className="page-header page-header-enhanced">
        <div className="page-title-block">
          <span className="page-badge">Panel académico</span>
          <h1>Gestión de Sílabos</h1>
          <div className="title-underline"></div>
          <p>
            Gestiona los sílabos, su estado de aprobación y el seguimiento académico.
          </p>
        </div>

        <button className="primary-button" onClick={() => setShowModal(true)}>
          + Nuevo sílabo
        </button>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>80</h3>
          <p>Total de sílabos</p>
        </div>
        <div className="summary-card">
          <h3>52</h3>
          <p>Aprobados</p>
        </div>
        <div className="summary-card">
          <h3>20</h3>
          <p>Pendientes</p>
        </div>
        <div className="summary-card">
          <h3>8</h3>
          <p>Rechazados</p>
        </div>
      </div>

      <div className="toolbar">
        <input type="text" placeholder="Buscar sílabo..." />
        <select>
          <option>Todos los estados</option>
          <option>Aprobado</option>
          <option>Pendiente</option>
          <option>Rechazado</option>
        </select>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Curso</th>
              <th>Docente</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ingeniería de Software</td>
              <td>Ana Torres</td>
              <td><span className="status approved">Aprobado</span></td>
              <td>02/04/2026</td>
              <td>
                <button className="table-btn">👁 Ver</button>
                <button className="table-btn">✏ Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">

            <div className="modal-header">
              <h2>Registrar nuevo sílabo</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>

            <form className="modal-form">
              
              <div className="form-group">
                <label>Curso</label>
                <input type="text" placeholder="Nombre del curso" />
              </div>

              <div className="form-group">
                <label>Docente</label>
                <input type="text" placeholder="Nombre del docente" />
              </div>

              <div className="form-group">
                <label>Estado</label>
                <select>
                  <option>Pendiente</option>
                  <option>Aprobado</option>
                  <option>Rechazado</option>
                </select>
              </div>

              <div className="form-group">
                <label>Fecha</label>
                <input type="date" />
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
                  Guardar sílabo
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SilabosView;