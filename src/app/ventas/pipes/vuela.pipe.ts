import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform( status: boolean ): string {
    return ( status) ? 'vuela' : 'no vuela' ;
  }

}
