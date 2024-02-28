import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'alumnoTitulo',
    standalone: true
})

export class AlumnoTituloPipe implements PipeTransform {
    transform(value: any, sexo: string): string {
        if (sexo == 'M') {
            return 'Sr. ' + value;
        }
        if (sexo =='F') {
            return 'Sra. ' + value;
        }
        else{
            return "helicoptero"
        }

    }

}