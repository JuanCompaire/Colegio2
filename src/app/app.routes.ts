import { Routes } from '@angular/router';
import { AlumnosListaComponent } from './Alumno/AlumnosLista.component';
import { CursoComponent } from './Curso/Curso.component';
import { CursosListaComponent } from './Curso/CursosLista.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { PaginaInicioComponent } from './Otros/PaginaInicio';
import { AlumnosDeCurso } from './AlumnoCurso/AlumnosDeCurso';
import { AlumnoCursoListaComponent } from './AlumnoCurso/AlumnoCursoLista.component';
import { Alumno } from './Alumno/Alumno';
import { PaginaNoEncontradaComponent } from './Otros/PaginaNoEncontrada';


export const routes: Routes = [
    { path: 'Alumnos', component: AlumnosListaComponent },
    { path: 'Alumnos/:id', component: AlumnoComponent},
    { path: 'Cursos', component: CursosListaComponent },
    { path: 'Cursos/:id', component: CursoComponent },
    { path: 'AlumnosCurso', component: AlumnoCursoListaComponent},
    { path: 'AlumnosDeCurso/:id', component: AlumnosDeCurso},
    { path: 'Inicio', component: PaginaInicioComponent },
    { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontradaComponent }
    ];