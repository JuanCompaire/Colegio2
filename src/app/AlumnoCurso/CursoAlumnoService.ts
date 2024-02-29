import { Injectable, NgModule } from "@angular/core";
import { Alumno } from "./IAlumno";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Curso } from "./ICurso";


@Injectable()
export class CursoAService{
    constructor(private _http: HttpClient){}
    getCursos(): Observable <Curso[]>{
        return this._http.get<Curso[]>('https://localhost:44394/api/Cursos/Get/');
    }

    getCursosPorId(id: number): Observable<Curso>{
        return this._http.get<Curso>('https://localhost:44394/api/Cursos/Get2/' + id);
    }
}
