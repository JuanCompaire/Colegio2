import { Component, OnInit} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { IAlumno, Alumno } from "./IAlumno";
import { AlumnoCService } from "./AlumnoCursoService";

@Component({
    selector: 'AlumnosDeCurso',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'AlumnosDeCurso.html',
    //styleUrls: ['./Alumno.component.css']
    providers: [AlumnoCService]
})
export class AlumnosDeCurso implements OnInit{
    alumnos: Alumno[] = [];

    constructor(private alumnoService: AlumnoCService, private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        let idCurso: number= this.activatedRoute.snapshot.params['id'];
        this.alumnoService.getAlumnosPorCurso(idCurso).subscribe((datosAlumno) => this.alumnos = datosAlumno);
    }
}