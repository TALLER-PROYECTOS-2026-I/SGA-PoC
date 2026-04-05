// src/components/Sidebar.tsx
import React from "react";
import logoUSMP from '../assets/logo_usmp.png';

interface SidebarProps {
  cambiarVista: (vista: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ cambiarVista }) => {
  return (
    <aside className="sidebar">
      <h2 className="logo">
        <img src={logoUSMP} alt="USMP Logo" style={{ width: "120px", height: "auto" }} />
      </h2>
      <ul>
        <li onClick={() => cambiarVista("dashboard")}>Inicio</li>
        <li onClick={() => cambiarVista("asignar")}>Docentes</li>
        <li onClick={() => cambiarVista("silabus")}>Silabus</li>
        <li onClick={() => cambiarVista("perfil")}>Perfil</li>
      </ul>
    </aside>
  );
};

export default Sidebar;