export interface IAlumno {//Esto es una interfaz que sirve para definir los atributos de un objeto, en este caso de un alumno
    ID: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;
    cursoID: number;
}

export class Alumno implements IAlumno {//Esto es una clase que sirve para crear objetos de tipo alumno
    constructor( //al poner el public delante de cada atributo, se crea automáticamente el atributo y se le asigna el valor que se le pasa por parámetro
        public ID: number,
        public nombre: string,
        public apellidos: string,
        public direccion: string,
        public fnac: string,
        public sexo: string,
        public cursoID: number
    ) { }
}