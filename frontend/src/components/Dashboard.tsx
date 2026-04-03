// Importa el logo al inicio del archivo
import logoUSMP from '../assets/logo_usmp.png';

const Dashboard = ({ irAsignar, irSilabus, irPerfil }: any) => {
  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        {/* Logo en vez de texto */}
        <h2 className="logo">
          <img src={logoUSMP} alt="USMP Logo" style={{ width: '120px', height: 'auto' }} />
        </h2>

        <ul>
          <li onClick={irPerfil}>Perfil</li>
          <li>Docentes</li>
          <li onClick={irSilabus}>Silabus</li>
        </ul>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* HEADER */}
        <div className="header">
         
        </div>

        {/* CARDS CENTRADAS */}
        <div className="cards">
          
          {/* PERFIL */}
          <div className="card" onClick={irPerfil}>
            <div className="icon user-icon">👤</div>
            <p>Perfil</p>
          </div>

          {/* ASIGNAR DOCENTE */}
          <div className="card" onClick={irAsignar}>
            <div className="icon red">＋</div>
            <p>Asignar Docente</p>
          </div>

          {/* SILABUS */}
          <div className="card" onClick={irSilabus}>
            <div className="icon check">✔</div>
            <p>Silabus</p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;