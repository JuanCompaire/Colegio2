import { Component, Inject, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IAlumno, Alumno } from './Alumno';
import { AlumnosService } from './AlumnosService';

@Component({
    selector: 'lista-alumnos',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    providers: [AlumnosService],
    templateUrl: './AlumnoLista.component.html'
})


export class AlumnosListaComponent implements OnInit{

    alumnos: Alumno[] = [];
    
    constructor(public losAlumnos: AlumnosService) {//Esto es un constructor que recibe un objeto de tipo AlumnosService, que es un servicio que hemos creado en alumnosService.ts y tengo que importar arriba y se crea por inyección de dependencias. al poner public delante de losAlumnos, se crea automáticamente el atributo DE LA CLASE y se le asigna el valor que se le pasa por parámetro
    }
    ngOnInit(): void {
        this.losAlumnos.getAlumnos().subscribe((datosAlumnos) => this.alumnos = datosAlumnos);//esto es para que se suscriba al observable que devuelve el método getAlumnos del servicio AlumnosService y cuando se reciban los datos, se asignen al atributo alumnos de la clase
    }



}