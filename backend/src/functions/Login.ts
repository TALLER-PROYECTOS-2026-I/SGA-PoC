import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function Login(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    try {
        const body: any = await request.json().catch(() => null);

        if (!body || !body.correo || !body.password) {
            return {
                status: 400,
                jsonBody: { success: false, mensaje: "Datos incompletos" }
            };
        }

        const { correo, password } = body;

        // Validación de dominio institucional (HU-1.0)
        if (!correo.toLowerCase().endsWith("@usmp.pe")) {
            return {
                status: 400,
                jsonBody: {
                    success: false,
                    mensaje: "Error: El correo debe ser institucional con el dominio @usmp.pe."
                }
            };
        }

        const usuarioPrueba = {
            correo: "docente@usmp.pe",
            password: "Password123"
        };

        if (correo === usuarioPrueba.correo && password === usuarioPrueba.password) {
            return {
                status: 200,
                jsonBody: {
                    success: true,
                    mensaje: "Acceso concedido. Redireccionando a la página de inicio.",
                    user: { email: correo, role: "Docente" }
                }
            };
        } else {
            return {
                status: 401,
                jsonBody: { success: false, mensaje: "Credenciales incorrectas." }
            };
        }
    } catch (error) {
        return { status: 500, jsonBody: { success: false, mensaje: "Error interno" } };
    }
}

app.http('Login', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: Login
});