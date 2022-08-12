import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {

  status: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'SuperMan',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'BatMan',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    }
  ];

  cambiarCapitalizado(): void {
    this.status = !this.status;
  }

  cambiarOrden( valor: string ): void {
    this.ordenarPor = valor;
  }

}
