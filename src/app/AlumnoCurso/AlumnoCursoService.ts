import { Injectable, NgModule } from "@angular/core";
import { Alumno } from "./IAlumno";
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@NgModule({
    imports: [HttpClientModule]
})

@Injectable() //Se utiliza para inyectar dependencias
export class AlumnoCService{
    constructor(private _http: HttpClient){} //Se inyecta el servicio/objeto HttpClient
    getAlumnos(): Observable <Alumno[]>{ //Observable es un tipo de dato que se utiliza para manejar eventos asincronos
        return this._http.get<Alumno[]>('https://localhost:44394/api/Alumnos/Get/'); //Se hace la petición al servidor
    }

    getAlumnosPorId(id: number): Observable<Alumno>{
        return this._http.get<Alumno>('https://localhost:44394/api/Alumnos/Get2/' + id);
    }

    getAlumnosPorCurso(id: number): Observable<Alumno[]>{
        return this._http.get<Alumno[]>(`https://localhost:44394/api/Alumnos/GetPorCurso/` + id);
    }
}