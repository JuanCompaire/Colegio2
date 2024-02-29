import { Component, Inject, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IAlumno, Alumno } from './IAlumno';
import { AlumnoCService } from './AlumnoCursoService';
import { RouterModule } from '@angular/router';
import { CursoDesplegable } from './CursoDesplegable.component';

@Component({
    selector: 'AlumnosCursoLista',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule, CursoDesplegable],
    templateUrl: './AlumnoCursoLista.component.html',
    styleUrl: './../Alumno/Alumno.component.css',
    providers: [AlumnoCService]
})


export class AlumnoCursoListaComponent implements OnInit{    
    seleccion: number = 800 
    alumnos: Alumno[] = [];

    constructor(public losAlumnos: AlumnoCService) {
    }

    ngOnInit(): void{
        this.losAlumnos.getAlumnos().subscribe(datosAlumnos => this.alumnos = datosAlumnos); 
    }

    cargarCurso(numCurso: number){
        this.seleccion = numCurso
    }
}