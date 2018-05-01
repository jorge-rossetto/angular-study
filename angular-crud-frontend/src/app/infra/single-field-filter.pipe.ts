import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'singleFieldFilter'
})
export class SingleFieldFilterPipe implements PipeTransform {

  // https://offering.solutions/blog/articles/2016/11/21/how-to-implement-a-table-filter-in-angular-2/

  // TODO MultipleFieldFilterPipe

  transform(items: any[], filterField: string, filterValue: string): any[] {
    if (!items) {
      return [];
    }
    if (!filterField || !filterValue) {
      return items;
    }

    return items.filter(singleItem =>
      singleItem[filterField].toLowerCase().includes(filterValue.toLowerCase())
    );
  }

}
