import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLower   : string = 'eddy';
  nombreUpper   : string = 'EDDY';
  nombreCompleto: string = 'eDDy sEjAs aRze';
  fecha         : Date = new Date();          //Fecha del dia actual

}
