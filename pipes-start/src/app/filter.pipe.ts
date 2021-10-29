import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter:string, propName:string) {
    if(value.length === 0) {
      return value;
    }
    if(filter === "")
      return value;
    return value.filter(item=> item[propName] === filter)
  }

}
