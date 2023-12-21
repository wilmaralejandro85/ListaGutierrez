import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  alumnos = [
    {     
      nombre: 'Wilmar',
      nota1: 2,
      nota2: 4,
      nota3: 3,
    },
    {
     
      nombre: 'Cristian',
      nota1: 2,
      nota2: 4,
      nota3: 2,
    },
    {
      
      nombre: 'Viviana',
      nota1: 3,
      nota2: 4,
      nota3: 5,
    },
    {
      
      nombre: 'Roberto',
      nota1: 1,
      nota2: 4,
      nota3: 2,
    }
  ]
}
