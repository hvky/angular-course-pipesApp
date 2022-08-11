import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Melissa';
  genero: string = 'femenino';

  invitacionMap: any = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Carlos', 'Emily'];
  clientesMap: any = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente experando',
    'other': 'tenemos # clientes esperando',
  };

  cambiarMasculino(): void {
    this.nombre = 'Eddy';
    this.genero = 'masculino';
  }

  cambiarFemenino(): void {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  // keyValuePipe
  persona: any = {
    nombre: 'Eddy',
    edad: 18,
    dirrecion: 'BO',
  }

  // jsonPipe
  heroes: any = [
    {
      nombre: 'SuperMan',
      vuela: true,
    },
    {
      nombre: 'Robbin',
      vuela: false,
    },
  ];

  // AsyncPipe
  miObservable = interval(1000);

  valorPromesa = new Promise(( resolve, reject ) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });

}
