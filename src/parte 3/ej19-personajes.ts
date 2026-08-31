/**
 * EJERCICIO 19 - Sistema de personajes
 * ---------------------------------------------------------------------------
 * Cada personaje ataca distinto:
 *   - Guerrero: ataque físico -> hace daño = this.ataque
 *   - Mago:     ataque mágico -> hace daño = round(this.ataque * 1.5)
 *   - Arquero:  ataque a distancia -> hace daño = round(this.ataque * 0.8)
 *
 * La vida de quien recibe el ataque nunca debe bajar de 0.
 */
export abstract class Personaje {
    constructor(
        public nombre: string,
        public vida: number,
        public ataque: number
    ) {}

    abstract atacar(objetivo: Personaje): void;
}

export class Guerrero extends Personaje {
    atacar(objetivo: Personaje): void {
        objetivo.vida = objetivo.vida - this.ataque;

        if (objetivo.vida < 0) {
            objetivo.vida = 0;
        }
    }
}

export class Mago extends Personaje {
    atacar(objetivo: Personaje): void {
        const danio = Math.round(this.ataque * 1.5);

        objetivo.vida = objetivo.vida - danio;

        if (objetivo.vida < 0) {
            objetivo.vida = 0;
        }
    }
}

export class Arquero extends Personaje {
    atacar(objetivo: Personaje): void {
        const danio = Math.round(this.ataque * 0.8);

        objetivo.vida = objetivo.vida - danio;

        if (objetivo.vida < 0) {
            objetivo.vida = 0;
        }
    }
}
