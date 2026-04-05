import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AsignarDocente from "./components/AsignarDocente";
import Silabus from "./components/Silabus";
import PerfilDirector from "./components/PerfilDirector";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [vista, setVista] = useState("home") 
  // home | login | dashboard | asignar | silabus | perfil

  return (
    <>
      {/* 🏠 HOME (VITE ORIGINAL) */}
      {vista === "home" && (
        <>
          <section id="center">
            <div className="hero">
              <img src={heroImg} className="base" width="170" height="179" alt="" />
              <img src={reactLogo} className="framework" alt="React logo" />
              <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>

            <div>
              <h1>Get started</h1>
              <p>
                Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
              </p>
            </div>

            <button
              className="counter"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>

            {/* 🔐 BOTÓN LOGIN */}
            <button onClick={() => setVista("login")}>
              HU - Ir a vista perfil director de escuela
            </button>
          </section>

          <div className="ticks"></div>

          <section id="next-steps">
            <div id="docs">
              <h2>Documentation</h2>
              <p>Your questions, answered</p>
            </div>

            <div id="social">
              <h2>Connect with us</h2>
            </div>
          </section>

          <div className="ticks"></div>
          <section id="spacer"></section>
        </>
      )}

      {/* 🔐 LOGIN */}
      {vista === "login" && (
        <>
          <button onClick={() => setVista("home")} style={{ margin: "10px" }}>
            ← Volver
          </button>

          <Login onLogin={() => setVista("dashboard")} />
        </>
      )}

      {/* 🏠 DASHBOARD */}
    {vista === "dashboard" && (
  <Dashboard 
    irAsignar={() => setVista("asignar")}
    irSilabus={() => setVista("silabus")}
    irPerfil={() => setVista("perfil")}
    cambiarVista={setVista}  // <-- ¡Importante! Esto permite cerrar sesión
  />
)}

     {/* 👤 PERFIL DIRECTOR */}
{vista === "perfil" && (
  <PerfilDirector cambiarVista={setVista} />
)}

      {/* 📘 ASIGNAR DOCENTE */}
      {vista === "asignar" && (
        <AsignarDocente cambiarVista={setVista} />
      )}

      {/* 📄 SILABUS */}
      {vista === "silabus" && (
        <Silabus cambiarVista={setVista} />
      )}
    </>
  )
}

export default App