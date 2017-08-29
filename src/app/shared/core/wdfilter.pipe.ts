import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wdfilter',
  pure: false
})
export class WdFilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
        return items;
    }

    console.log(filter);
   
    if(filter.group){
        // filter items array, items which match and return true will be kept, false will be filtered out
      items =  items.filter(item => item.group.toUpperCase() == filter.group.toUpperCase());
    }
    return items;

}

}