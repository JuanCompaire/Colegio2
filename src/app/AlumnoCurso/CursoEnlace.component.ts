import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { CommonModule } from '@angular/common';
import { AlumnoCService } from "./AlumnoCursoService";
import { RouterModule } from "@angular/router";
import { Curso } from "./ICurso";
import { CursoAService } from "./CursoAlumnoService";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'CursoEnlace',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: 'CursoEnlace.component.html',
    styleUrls: ['./../Alumno/Alumno.component.css'],
    providers: [CursoAService]
})

export class CursoEnlace  {

    cursos : Curso[] = [];
    constructor(private router: Router, private cursoService: CursoAService) {
        this.cursoService.getCursos().subscribe((datosCursos) => this.cursos = datosCursos);
    }

    mostrarAlumnos(idCurso: number) {
        this.router.navigate(['/AlumnosDeCurso', idCurso]);
    }

}