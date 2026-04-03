// src/components/AsignarDocente.tsx
import React from "react";

interface Props {
  cambiarVista: (vista: string) => void;
}

const AsignarDocente: React.FC<Props> = ({ cambiarVista }) => {
  return (
    <div className="perfil-director">
      <main className="main">
        <div className="header"></div>
        <h3>Asignar Docente</h3>

        <input placeholder="Nombre del docente" />
        <input placeholder="Nombre de la asignatura" />
        <input placeholder="Código" />
        <input placeholder="Periodo académico" />

        <textarea placeholder="Mensaje"></textarea>

        <div className="botones">
          <button onClick={() => cambiarVista("dashboard")}>Volver</button>
          <button>Enviar</button>
        </div>
      </main>
    </div>
  );
};

export default AsignarDocente;