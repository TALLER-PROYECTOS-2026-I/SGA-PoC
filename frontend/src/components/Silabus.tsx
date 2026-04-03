import logoUSMP from '../assets/logo_usmp.png';

const Silabus = ({ volver }: any) => {
  const archivos = [
    { nombre: "Taller de Proyectos", url: "/pdfs/taller.pdf" },
    { nombre: "Base de Datos", url: "/pdfs/bd.pdf" }
  ];

  return (
    <div className="perfil-director">
      <aside className="sidebar">
        <h2 className="logo">
          <img src={logoUSMP} alt="USMP Logo" style={{ width: '120px', height: 'auto' }} />
        </h2>
      </aside>

      

      <main className="main">
        <div className="header"></div>
        

        <h3>Lista de Sílabus</h3>

        {archivos.map((file, i) => (
          <div key={i} className="card">
            <p>{file.nombre}</p>
            <button onClick={() => window.open(file.url)}>
              Ver PDF
            </button>
          </div>
        ))}

        <button onClick={volver}>Volver</button>
      </main>
    </div>
  );
};

export default Silabus;