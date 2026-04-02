import "../App.css";
import { NavLink, Outlet } from "react-router-dom";
import logoFIA from "../assets/Logo_FIA.png";

type AdminDashboardProps = {
  user: string;
  onLogout: () => void;
};

function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="logo-section">
          <img src={logoFIA} alt="FIA" className="sidebar-logo" />
          <p>Sistema Académico</p>
        </div>

        <nav className="menu">
          <p className="menu-title">MENÚ PRINCIPAL</p>

          <ul>
            <li>
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
              >
                <span className="menu-icon">🏠</span>
                <span>Inicio</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/usuarios"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
              >
                <span className="menu-icon">👥</span>
                <span>Usuarios</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/silabos"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
              >
                <span className="menu-icon">📘</span>
                <span>Sílabos</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/facultades"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
              >
                <span className="menu-icon">🏫</span>
                <span>Facultades</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/configuracion"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
              >
                <span className="menu-icon">⚙️</span>
                <span>Configuración</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="topbar">
          <div className="session-alert">
            Después de 5 minutos de actividad se cerrará su sesión
          </div>

          <div className="user-box">
            <span>{user || "Administrador"}</span>
            <button className="logout-button" onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        </header>

        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;