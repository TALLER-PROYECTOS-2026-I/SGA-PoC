import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

// 🔹 Simulación de tabla (BD)
let estrategiasDB: { id: number; nombre: string }[] = [
  { id: 1, nombre: "Aprendizaje basado en proyectos" },
];

// 🔹 GET -> obtener datos
export async function getEstrategias(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  return {
    jsonBody: estrategiasDB,
    status: 200,
  };
}

// 🔹 POST -> agregar dato
export async function createEstrategia(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  const body = (await request.json()) as { nombre: string };

  const nueva = {
    id: estrategiasDB.length + 1,
    nombre: body.nombre,
  };

  estrategiasDB.push(nueva);

  return {
    jsonBody: nueva,
    status: 201,
  };
}

// 🔹 Rutas
app.http("getEstrategias", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: getEstrategias,
});

app.http("createEstrategia", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: createEstrategia,
});
