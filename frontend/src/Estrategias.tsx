import { useEffect, useState } from "react";

type Estrategia = {
  id: number;
  nombre: string;
};

function Estrategias() {
  const [estrategias, setEstrategias] = useState<Estrategia[]>([]);
  const [nombre, setNombre] = useState("");

  // GET
  useEffect(() => {
    fetch("http://localhost:7071/api/getEstrategias")
      .then((res) => res.json())
      .then((data: Estrategia[]) => setEstrategias(data));
  }, []);

  // POST
  const agregar = async () => {
    await fetch("http://localhost:7071/api/createEstrategia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre }),
    });

    const res = await fetch("http://localhost:7071/api/getEstrategias");
    const data: Estrategia[] = await res.json();
    setEstrategias(data);
    setNombre("");
  };

  return (
    <div>
      <h2>Estrategias Metodológicas</h2>

      <ul>
        {estrategias.map((e) => (
          <li key={e.id}>{e.nombre}</li>
        ))}
      </ul>

      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nueva estrategia"
      />

      <button onClick={agregar}>Agregar</button>
    </div>
  );
}

export default Estrategias;
