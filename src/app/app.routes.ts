import { Routes } from '@angular/router';
import { AlumnosListaComponent } from './Alumno/AlumnosLista.component';


export const routes: Routes = [
    
    {path: '', redirectTo: '/alumnos', pathMatch: 'full'},
    {path: 'alumnos',component: AlumnosListaComponent},
];
