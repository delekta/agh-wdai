import { Pipe, PipeTransform } from '@angular/core';
import {Holiday} from '../holidays-offer-element/holiday'

@Pipe({
  name: 'filterLocation'
})
export class FilterLocationPipe implements PipeTransform {

  transform(holidays: Holiday[], locations: string[]): Holiday[] {
    if(locations.length < 1){
      return holidays
    }
    else{
      return holidays.filter(h => locations.indexOf(h.country) !== -1)
    }
  }

}
 