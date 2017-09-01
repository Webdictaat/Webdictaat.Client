import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wdtotalpoints',
  pure: false
})
export class TotalPointsPipe implements PipeTransform {

  transform(items: any[], filter: any): any { 
     var totalPoints = 0;
     items.forEach(item => totalPoints += item.points );
     return totalPoints;
  }

}