import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Arrays en memoria para almacenar los registros
let competencias: string[] = [];
let componentes: string[] = [];
let contenidosActitudinales: string[] = [];

// 1. Obtener todos los registros de competencias, componentes y contenidos actitudinales
app.get('/registros', (req: Request, res: Response) => {
  res.status(200).json({
    competencias,
    componentes,
    contenidosActitudinales,
  });
});

// 2. Agregar un nuevo registro (Competencia, Componente o Contenido actitudinal)
app.post('/agregar', (req: Request, res: Response) => {
  const { tipo, nombre } = req.body; // Recibimos tipo (competencia, componente o contenido)

  if (!nombre || !tipo) {
    return res.status(400).json({ error: 'Faltan parámetros: tipo o nombre' });
  }

  if (tipo === 'competencia') {
    competencias.push(nombre);
    return res.status(201).json({ success: true, message: 'Competencia agregada correctamente' });
  } else if (tipo === 'componente') {
    componentes.push(nombre);
    return res.status(201).json({ success: true, message: 'Componente agregado correctamente' });
  } else if (tipo === 'contenido') {
    contenidosActitudinales.push(nombre);
    return res.status(201).json({ success: true, message: 'Contenido actitudinal agregado correctamente' });
  }

  return res.status(400).json({ error: 'Tipo no válido' });
});

// 3. Eliminar un registro (Competencia, Componente o Contenido actitudinal)
app.delete('/eliminar', (req: Request, res: Response) => {
  const { tipo, nombre } = req.body; // Recibimos el tipo y nombre a eliminar

  if (!nombre || !tipo) {
    return res.status(400).json({ error: 'Faltan parámetros: tipo o nombre' });
  }

  if (tipo === 'competencia') {
    competencias = competencias.filter((comp) => comp !== nombre);
    return res.status(200).json({ success: true, message: 'Competencia eliminada correctamente' });
  } else if (tipo === 'componente') {
    componentes = componentes.filter((comp) => comp !== nombre);
    return res.status(200).json({ success: true, message: 'Componente eliminado correctamente' });
  } else if (tipo === 'contenido') {
    contenidosActitudinales = contenidosActitudinales.filter((cont) => cont !== nombre);
    return res.status(200).json({ success: true, message: 'Contenido actitudinal eliminado correctamente' });
  }

  return res.status(400).json({ error: 'Tipo no válido' });
});

// 4. Guardar cambios (esto solo es relevante si tuvieras persistencia en base de datos, en este caso solo es en memoria)

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});