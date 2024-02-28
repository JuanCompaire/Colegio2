import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'alumnoSexo',
    standalone: true
})

export class AlumnoSexoPipe implements PipeTransform {
    transform(value:any,sexo: string):string {
        if (sexo == "M"){
            return "Masculino"
        } else{
            return "Femenino";
        }
    }

}