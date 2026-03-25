import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function ForgotPassword(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const body: any = await request.json().catch(() => null);
    const correo = body?.correo;

    if (!correo || !correo.toLowerCase().endsWith("@usmp.pe")) {
        return { status: 400, jsonBody: { success: false, mensaje: "Email institucional inválido." } };
    }

    // Simulación: Aquí enviarías un correo con un código (ej. 123456)
    context.log(`Enviando código de recuperación a: ${correo}`);

    return {
        status: 200,
        jsonBody: {
            success: true,
            mensaje: "Código de recuperación enviado a su correo institucional."
        }
    };
}

app.http('ForgotPassword', { methods: ['POST'], authLevel: 'anonymous', handler: ForgotPassword });