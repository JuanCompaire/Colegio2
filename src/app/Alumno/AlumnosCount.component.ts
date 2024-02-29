import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'cuantos-alumnos',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule],
    templateUrl: './AlumnosCount.component.html',
    styleUrl: './AlumnosCount.component.css'
})
export class AlumnosCountComponent{
    @Input()
    todos: number = 0

    @Input()
    hombres: number = 0

    @Input()
    mujeres: number = 0

    opcionElegida : string = "Todos"

    @Output()
    globalElegido : EventEmitter<string> = new EventEmitter<string>();

    cuandoCambiemos(){
        this.globalElegido.emit(this.opcionElegida);//Accedemos al global elegido con this y emitimos el valor de la variable opcionElegida que es un string
                    }
}