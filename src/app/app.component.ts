import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  template:`
    <div style="padding: 10px">
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <a class="nav-link" routerLink="/Alumnos">Alumnos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/Cursos">Cursos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/AlumnosCurso">AlumnosCurso</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/AlumnosDeCurso/:id">AlumnosDeCurso</a>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}