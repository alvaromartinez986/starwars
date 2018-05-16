import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorttext'
})
export class ShorttextPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    value = value.substring(0,200);
    value += "....";
    return value;
  }

}
