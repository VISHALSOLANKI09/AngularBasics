import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabeticalOrder'
})
export class AlphabeticalOrderPipe implements PipeTransform {

  transform(array: string[], order:string): string[] {
    let sorted = array.sort();
    if(order==="desc") {
      sorted.reverse();
    }
    return sorted;
  }

}
