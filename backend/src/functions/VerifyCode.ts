import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function VerifyCode(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const body: any = await request.json().catch(() => null);
    const { correo, codigo } = body;

    // Simulación de validación de código
    if (codigo === "123456") {
        return {
            status: 200,
            jsonBody: { success: true, mensaje: "Código verificado. Puede proceder a cambiar su contraseña." }
        };
    }

    return {
        status: 401,
        jsonBody: { success: false, mensaje: "Código de verificación incorrecto." }
    };
}

app.http('VerifyCode', { methods: ['POST'], authLevel: 'anonymous', handler: VerifyCode });