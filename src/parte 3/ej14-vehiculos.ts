/**
 * EJERCICIO 14 - Vehículos
 * ---------------------------------------------------------------------------
 * `Vehiculo` ya viene completo. Lo que hay que completar es el `acelerar()`
 * de cada subclase: cada una lo redefine (override) a su manera.
 *
 * Pregunta para pensar (no se responde acá, es para entender el resultado
 * del test de polimorfismo más abajo): si tenés un arreglo `Vehiculo[]` con
 * un Auto, una Moto y un Camion, y llamás `v.acelerar()` sobre cada uno,
 * ¿qué versión de `acelerar()` se ejecuta en cada caso? ¿La de `Vehiculo` o
 * la de la subclase concreta? ¿Por qué?
 */
export class Vehiculo {
    constructor(
        public marca: string,
        public modelo: string
    ) {}

    acelerar(): void {
        console.log(`${this.marca} ${this.modelo} está acelerando`);
    }

    frenar(): void {
        console.log(`${this.marca} ${this.modelo} está frenando`);
    }
}

export class Auto extends Vehiculo {
    acelerar(): void {
        console.log(`${this.marca} ${this.modelo}: el auto está acelerando`);
    }
}

export class Moto extends Vehiculo {
    acelerar(): void {
        console.log(`${this.marca} ${this.modelo}: la moto está acelerando`);
    }
}

export class Camion extends Vehiculo {
    acelerar(): void {
        console.log(`${this.marca} ${this.modelo}: el camión está acelerando`);
    }
}
