import {Pipe, PipeTransform} from '@angular/core';


// # Filter Array of Objects
@Pipe({
    name: 'filter',
    pure: false
})
export class FilterArrayPipe implements PipeTransform {
    transform(items: any, field: any, value: any): any {

        if (!value) {
            return items;
        }
        else if (items !== undefined) {
            return items.filter(item => item[field].toLowerCase().match(new RegExp('' + value)),
                item => item[field].toUpperCase().match(new RegExp('' + value))
            );
        }
        return items;
    }
}