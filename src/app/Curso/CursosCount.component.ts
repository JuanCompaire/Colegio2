import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'cuantos-cursos',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule],
    templateUrl: './CursosCount.component.html',
    styleUrl: './CursosCount.component.css'
})
export class CursosCountComponent{
    @Input()
    todos: number = 0

    @Input()
    letraA: number = 0

    @Input()
    letraB: number = 0

   

    opcionElegida : string = "Todos"

    @Output()
    globalElegido : EventEmitter<string> = new EventEmitter<string>();

    cuandoCambiemos(){
        this.globalElegido.emit(this.opcionElegida);//Accedemos al global elegido con this y emitimos el valor de la variable opcionElegida que es un string
                    }
}