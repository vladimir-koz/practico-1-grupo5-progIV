/**
 * EJERCICIOS 8, 9 y 10 - Clase Alumno
 * ---------------------------------------------------------------------------
 * Esta clase se completa en tres pasos, marcados con TODO. Cada paso agrega
 * comportamiento sin romper el anterior:
 *
 *   - Ejercicio 8:  atributos básicos, getNombreCompleto, esMayorDeEdad.
 *   - Ejercicio 9:  `edad` pasa a ser privada; getEdad/setEdad con validación.
 *   - Ejercicio 10: arreglo de materias inscriptas.
 */

// -----------------------------------------------------------------------------
// EJERCICIO 10 - interface Materia
// -----------------------------------------------------------------------------
//TODO cambiar a type
export interface Materia {
    codigo: number;
    nombre: string;
    horas: number;
}

export class Alumno {
    public legajo: number;
    public nombre: string;
    public apellido: string;
    public email: string;

    // EJERCICIO 9: `edad` es privada. Se accede solo con getEdad/setEdad.
    private edad: number = 0;

    // EJERCICIO 10: materias en las que está inscripto el alumno.
    private materias: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        edad: number,
        email: string
    ) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.setEdad(edad); // Reutilizamos la validación del setter
    }

    // -------------------------------------------------------------------
    // EJERCICIO 8
    // -------------------------------------------------------------------

    getNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    esMayorDeEdad(): boolean {
        return this.edad >= 18;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 9 - encapsulamiento de `edad`
    // -------------------------------------------------------------------

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        if (edad < 0 || edad > 120) {
            throw new Error("La edad proporcionada no es válida.");
        }
        this.edad = edad;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 10 - materias
    // -------------------------------------------------------------------

    agregarMateria(materia: Materia): void {
       if (!this.estaInscripto(materia.codigo)) {
            this.materias.push(materia);
        }
    }

    quitarMateria(codigo: number): Materia | undefined {
        const indice = this.materias.findIndex(m => m.codigo === codigo);
        if (indice !== -1) {
            // Eliminamos 1 elemento en el índice encontrado y lo retornamos
            return this.materias.splice(indice, 1)[0];
        }
        return undefined;
    }

    estaInscripto(codigo: number): boolean {
        return this.materias.some(m => m.codigo === codigo);
    }

    cantidadMaterias(): number {
        return this.materias.length;
    }

    getMaterias(): Materia[] {
       // Se devuelve una copia para no mutar el arreglo original desde afuera
        return [...this.materias];
    }
}
