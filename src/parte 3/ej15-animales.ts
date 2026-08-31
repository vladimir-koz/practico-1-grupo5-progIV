/**
 * EJERCICIO 15 - Animales
 * ---------------------------------------------------------------------------
 * Objetivo: demostrar polimorfismo mediante una referencia del tipo de la
 * clase padre (`Animal`), sin saber de qué animal concreto se trata.
 */
export abstract class Animal {
    constructor(
        public nombre: string,
        public edad: number
    ) {}

    abstract hacerSonido(): string;
}

export class Perro extends Animal {
    hacerSonido(): string {
        return "Guau";
    }
}

export class Gato extends Animal {
    hacerSonido(): string {
        return "Miau";
    }
}

export class Vaca extends Animal {
    hacerSonido(): string {
        return "Muu";
    }
}

export class Pajaro extends Animal {
    hacerSonido(): string {
        return "Pío";
    }
}

export function hacerSonidos(animales: Animal[]): void {
    animales.forEach((animal) => {
        console.log(`${animal.nombre}: ${animal.hacerSonido()}`);
    });
}
