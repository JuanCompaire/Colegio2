import { Routes } from '@angular/router';
import { AlumnosListaComponent } from './Alumno/AlumnosLista.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { PaginaInicioComponent } from './Otros/PaginaInicio';


export const routes: Routes = [
    {path: 'Inicio', component: PaginaInicioComponent},    
    {path: '', redirectTo: '/Inicio', pathMatch: 'full'},
    {path: 'Alumnos', component: AlumnosListaComponent},
    {path: 'Alumnos/:id', component: AlumnoComponent},
];
