import { Component, Inject, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ICurso, Curso } from './Curso';
import { CursoService } from './CursoService';
import {RouterModule} from '@angular/router';
import { CursosCountComponent } from './CursosCount.component';

@Component({
    selector: 'lista-cursos',
    standalone: true,
    imports: [CommonModule,RouterModule, RouterOutlet,CursosCountComponent],
    providers: [CursoService],
    styleUrl: './Cursos.component.css',
    templateUrl: './CursosLista.component.html'
})

export class CursosListaComponent implements OnInit{

    seleccion: string = 'Todos';

    cursos: Curso[] = [];

    constructor(public losCursos: CursoService){

    }
    ngOnInit(): void {
        this.losCursos.getCursos().subscribe((datosCursos) => this.cursos =  datosCursos);
    }

    getNumTodos(): number{
        return this.cursos.length;
    }

    getNumA(): number {
        return this.cursos.filter(curso => curso.letra =="A").length;
    }

    getNumB(): number {
        return this.cursos.filter(curso => curso.letra =="B").length;
    }

    alCambiar(opcionSeleccionada: string): void{
        this.seleccion = opcionSeleccionada;
    }
}