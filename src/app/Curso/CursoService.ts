import { Injectable, isStandalone } from "@angular/core"; 
import { Curso } from "./Curso";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class CursoService{
    constructor(private http: HttpClient){}

    getCursos(): Observable<Curso[]>{
        return this.http.get<Curso[]>('https://localhost:44394/Api/Cursos/Get/');
    }
    getCurso(id: number): Observable<Curso>{
        return this.http.get<Curso>('https://localhost:44394/Api/Cursos/Get2/' + id);
    }
}