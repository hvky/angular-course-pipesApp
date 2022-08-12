import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform( valor: string, status: boolean ): string {
    return ( status ) ? valor.toUpperCase() : valor;
  }

}
