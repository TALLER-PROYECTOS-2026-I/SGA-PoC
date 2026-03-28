import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

interface AsignarDocenteBody {
  rol: string;
  docenteId: number;
  docenteNombre: string;
  nombreAsignatura: string;
  codigoAsignatura: string;
  periodoAcademico: string;
  mensajeDocente?: string;
}

interface AsignacionGuardada {
  id: number;
  docenteId: number;
  docenteNombre: string;
  nombreAsignatura: string;
  codigoAsignatura: string;
  periodoAcademico: string;
  mensajeDocente?: string;
  fecha: string;
}

const asignacionesMock: AsignacionGuardada[] = [];

function procesarAsignacionDocente(data: AsignarDocenteBody) {
  const {
    rol,
    docenteId,
    docenteNombre,
    nombreAsignatura,
    codigoAsignatura,
    periodoAcademico,
    mensajeDocente,
  } = data;

  const errores: string[] = [];

  if (!rol || rol.trim().toLowerCase() !== "director de escuela") {
    errores.push("El rol debe ser 'Director de Escuela'.");
  }

  if (!docenteId || !docenteNombre) {
    errores.push("Debe seleccionar un docente.");
  }

  if (!nombreAsignatura || nombreAsignatura.trim().length < 5) {
    errores.push("El nombre de la asignatura debe tener al menos 5 caracteres.");
  }

  if (!codigoAsignatura || codigoAsignatura.trim().length === 0) {
    errores.push("El código de asignatura es obligatorio.");
  }

  if (!periodoAcademico || periodoAcademico.trim().length === 0) {
    errores.push("El periodo académico es obligatorio.");
  }

  if (mensajeDocente && mensajeDocente.length > 400) {
    errores.push("El mensaje no puede superar 400 caracteres.");
  }

  if (errores.length > 0) {
    return {
      ok: false,
      status: 400,
      errores,
    };
  }

  const nuevaAsignacion: AsignacionGuardada = {
    id: Date.now(),
    docenteId,
    docenteNombre: docenteNombre.trim(),
    nombreAsignatura: nombreAsignatura.trim(),
    codigoAsignatura: codigoAsignatura.trim(),
    periodoAcademico: periodoAcademico.trim(),
    mensajeDocente: mensajeDocente?.trim() || "",
    fecha: new Date().toISOString(),
  };

  asignacionesMock.push(nuevaAsignacion);

  return {
    ok: true,
    status: 200,
    message: "Asignación procesada correctamente",
    data: nuevaAsignacion,
  };
}

export async function asignarDocenteSilabo(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  try {
    const body = (await request.json()) as AsignarDocenteBody;

    const resultado = procesarAsignacionDocente(body);

    return {
      status: resultado.status,
      jsonBody: resultado,
    };
  } catch (error) {
    context.log("Error al procesar la solicitud", error);

    return {
      status: 500,
      jsonBody: {
        ok: false,
        message: "Error interno del servidor.",
      },
    };
  }
}

export async function obtenerAsignaciones(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {

  context.log("Listado de asignaciones");

  return {
    status: 200,
    jsonBody: {
      ok: true,
      data: asignacionesMock,
    },
  };
}

app.http("asignarDocenteSilabo", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: asignarDocenteSilabo,
});

app.http('obtenerAsignaciones', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: obtenerAsignaciones
});