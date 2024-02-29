import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CursoService } from './CursoService';
import { ActivatedRoute } from '@angular/router';
import { Curso } from './Curso';

@Component({
    selector: 'el-curso',
    standalone: true,
    imports: [CommonModule, RouterOutlet], 
    providers: [CursoService],
    templateUrl: './Curso.component.html',
    styleUrl: './Cursos.component.css'
})

export class CursoComponent implements OnInit{

    curso!: Curso;

    constructor(public cursoService: CursoService,private route: ActivatedRoute){

    }
    ngOnInit(): void {
        let id: number = this.route.snapshot.params['id'];
        this.cursoService.getCurso(id).subscribe((datosCurso) => this.curso = datosCurso);
    }
}