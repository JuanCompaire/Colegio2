import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { CommonModule } from '@angular/common';
import { AlumnoCService } from "./AlumnoCursoService";
import { RouterModule } from "@angular/router";
import { Curso } from "./ICurso";
import { CursoAService } from "./CursoAlumnoService";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'CursoDesplegable',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: 'CursoDesplegable.component.html',
    styleUrls: ['./../Alumno/Alumno.component.css'],
    providers: [CursoAService]
})

export class CursoDesplegable  {

    seleccion: any
    cursos : Curso[] = [];
    constructor(public losCursos : CursoAService){   
        this.losCursos.getCursos().subscribe((datosCursos) => this.cursos = datosCursos);
    }

    @Output()
    CursoSeleccionado: EventEmitter<number> = new EventEmitter<number>()

    alSeleccionar(event: any): void {
        this.CursoSeleccionado.emit(this.seleccion.ID); 
    }
}