import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wdfilter',
  pure: false
})
export class WdFilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter || !filter.value || !filter.property) {
        return items;
    }


    // filter items array, items which match and return true will be kept, false will be filtered out
    items =  items.filter(item => {
      if(item[filter.property]){
        return item[filter.property].toUpperCase().indexOf(filter.value.toUpperCase()) !== -1;
      }
    });
  
    return items;

}

}