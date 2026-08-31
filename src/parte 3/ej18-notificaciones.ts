/**
 * EJERCICIO 18 - Sistema de notificaciones
 * ---------------------------------------------------------------------------
 * `enviarNotificaciones` debe funcionar con cualquier tipo de notificación,
 * sin importarle cuál es el tipo concreto.
 */
export abstract class Notificacion {
    abstract enviar(mensaje: string): void;
}

export class NotificacionEmail extends Notificacion {
    enviar(mensaje: string): void {
        // TODO: informar por consola (console.log) que se envía un email
        // con ese mensaje (mencionar "email").
        console.log(`Enviando email: ${mensaje}`);
    }
}

export class NotificacionSMS extends Notificacion {
    enviar(mensaje: string): void {
        // TODO: idem, mencionando "SMS"
        console.log(`Enviando SMS: ${mensaje}`);
    }
}

export class NotificacionPush extends Notificacion {
    enviar(mensaje: string): void {
        // TODO: idem, mencionando "push"
        console.log(`Enviando notificación push: ${mensaje}`);
    }
}

export function enviarNotificaciones(
    notificaciones: Notificacion[],
    mensaje: string
): void {
    // TODO: enviar el mensaje a través de cada notificación recibida.
    notificaciones.forEach((notificacion) => {
        notificacion.enviar(mensaje);
    });
    
}
