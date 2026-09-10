/**
 * EJERCICIO 20 (INTEGRADOR) - Sistema de gestión de una universidad
 * ---------------------------------------------------------------------------
 * Persona
 *   ├── Alumno
 *   └── Docente
 *
 * `Persona` es abstracta. `Alumno` y `Docente` implementan
 * `obtenerInformacion()` cada uno a su manera (polimorfismo).
 *
 * La relación con `Materia` es de ida y vuelta:
 *   - `alumno.inscribirse(materia)` debe dejar constancia tanto en el
 *     alumno (su lista de materias) como en la materia (su lista de
 *     alumnos inscriptos).
 *   - `docente.asignarMateria(materia)` es análogo, del lado docente.
 *
 * Los métodos de `Materia` (`inscribirAlumno`, `asignarDocente`) son el
 * mecanismo que usan `Alumno`/`Docente` para avisarle a la materia. No hace
 * falta (ni corresponde) llamarlos "a mano" salvo que quieras inscribir
 * solamente del lado de la materia.
 */
export abstract class Persona {
    constructor(
        public legajo: number,
        public nombre: string,
        public apellido: string,
        public email: string
    ) {}

    abstract obtenerInformacion(): string;
}

export class Materia {
    private alumnosInscriptos: Alumno[] = [];
    private docentesAsignados: Docente[] = [];

    constructor(
        public codigo: number,
        public nombre: string,
        public horas: number
    ) {}

    inscribirAlumno(alumno: Alumno): void {
        const alumnoYaInscripto = this.alumnosInscriptos.some(
            (alumnoInscripto) => alumnoInscripto.legajo === alumno.legajo
        );

        if (!alumnoYaInscripto) {
            this.alumnosInscriptos.push(alumno);
        }
    }

    quitarAlumno(alumno: Alumno): void {
        this.alumnosInscriptos = this.alumnosInscriptos.filter(
            (alumnoInscripto) => alumnoInscripto.legajo !== alumno.legajo
        );
    }

    asignarDocente(docente: Docente): void {
        const docenteYaAsignado = this.docentesAsignados.some(
            (docenteAsignado) => docenteAsignado.legajo === docente.legajo
        );

        if (!docenteYaAsignado) {
            this.docentesAsignados.push(docente);
        }
    }

    getAlumnosInscriptos(): Alumno[] {
        return this.alumnosInscriptos.map(
            (alumno) =>
                new Alumno(
                    alumno.legajo,
                    alumno.nombre,
                    alumno.apellido,
                    alumno.email
                )
        );
    }

    getDocentesAsignados(): Docente[] {
        return this.docentesAsignados.map(
            (docente) =>
                new Docente(
                    docente.legajo,
                    docente.nombre,
                    docente.apellido,
                    docente.email,
                    docente.especialidad
                )
        );
    }
}

export class Alumno extends Persona {
    private materias: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        email: string
    ) {
        super(legajo, nombre, apellido, email);
    }

    inscribirse(materia: Materia): void {
        const materiaYaInscripta = this.materias.some(
            (materiaInscripta) => materiaInscripta.codigo === materia.codigo
        );

        if (!materiaYaInscripta) {
            this.materias.push(materia);
            materia.inscribirAlumno(this);
        }
    }

    quitarMateria(materia: Materia): void {
        this.materias = this.materias.filter(
            (materiaInscripta) =>
                materiaInscripta.codigo !== materia.codigo
        );

        materia.quitarAlumno(this);
    }

    getMaterias(): Materia[] {
        return this.materias.map(
            (materia) =>
                new Materia(
                    materia.codigo,
                    materia.nombre,
                    materia.horas
                )
        );
    }

    obtenerInformacion(): string {
        return `Alumno: ${this.nombre} ${this.apellido}, legajo: ${this.legajo}, materias inscriptas: ${this.materias.length}`;
    }
}

export class Docente extends Persona {
    private materiasAsignadas: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        email: string,
        public especialidad: string
    ) {
        super(legajo, nombre, apellido, email);
    }

    asignarMateria(materia: Materia): void {
        const materiaYaAsignada = this.materiasAsignadas.some(
            (materiaAsignada) =>
                materiaAsignada.codigo === materia.codigo
        );

        if (!materiaYaAsignada) {
            this.materiasAsignadas.push(materia);
            materia.asignarDocente(this);
        }
    }

    getMateriasAsignadas(): Materia[] {
        return this.materiasAsignadas.map(
            (materia) =>
                new Materia(
                    materia.codigo,
                    materia.nombre,
                    materia.horas
                )
        );
    }

    obtenerInformacion(): string {
        return `Docente: ${this.nombre} ${this.apellido}, legajo: ${this.legajo}, especialidad: ${this.especialidad}`;
    }
}