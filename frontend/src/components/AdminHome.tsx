import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div className="page-container">

      {/* 🔥 MENSAJE */}
      <div className="page-header page-header-enhanced">
        <div className="page-title-block">
          <span className="page-badge">Panel Administrador</span>
          <h1>Bienvenido al Sistema Académico</h1>
          <div className="title-underline"></div>
          <p>
            Desde este panel podrás gestionar usuarios, sílabos, facultades y la configuración del sistema.
          </p>
        </div>
      </div>

      {/* 🔥 RESUMEN */}
      <div className="summary-cards">
        <div className="summary-card">
          <h3>120</h3>
          <p>Usuarios registrados</p>
        </div>

        <div className="summary-card">
          <h3>80</h3>
          <p>Sílabos creados</p>
        </div>

        <div className="summary-card">
          <h3>8</h3>
          <p>Facultades</p>
        </div>

        <div className="summary-card">
          <h3>4</h3>
          <p>Módulos activos</p>
        </div>
      </div>

      {/* 🔥 TU CÓDIGO ORIGINAL (NO TOCADO) */}
      <section className="cards-container">
        <Link to="/admin/usuarios" className="admin-card-link">
          <div className="admin-card">
            <div className="icon-box">+</div>
            <p>Gestionar Usuarios</p>
          </div>
        </Link>

        <Link to="/admin/silabos" className="admin-card-link">
          <div className="admin-card">
            <div className="icon-box">✔</div>
            <p>Gestionar Sílabos</p>
          </div>
        </Link>

        <Link to="/admin/facultades" className="admin-card-link">
          <div className="admin-card">
            <div className="icon-box">🏫</div>
            <p>Gestionar Facultades</p>
          </div>
        </Link>

        <Link to="/admin/configuracion" className="admin-card-link">
          <div className="admin-card">
            <div className="icon-box">⚙</div>
            <p>Configuración del Sistema</p>
          </div>
        </Link>
      </section>

    </div>
  );
}

export default AdminHome;