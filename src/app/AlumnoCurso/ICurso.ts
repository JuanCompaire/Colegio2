export interface ICurso {//Esto es una interfaz que sirve para definir los atributos de un objeto, en este caso de un curso
    ID: number;
    ano: number;
    letra: string;
}

export class Curso implements ICurso {//Esto es una clase que sirve para crear objetos de tipo curso
    constructor( //al poner el public delante de cada atributo, se crea automáticamente el atributo y se le asigna el valor que se le pasa por parámetro
        public ID: number,
        public ano: number,
        public letra: string,
    ) { }
}