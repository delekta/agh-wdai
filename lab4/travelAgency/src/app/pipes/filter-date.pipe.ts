import { Pipe, PipeTransform } from '@angular/core';
import {Holiday} from '../holidays-offer-element/holiday'

@Pipe({
  name: 'filterDate'
})

export class FilterDatePipe implements PipeTransform {

  transform(holidays: Holiday[], dateRangeMin:Date, dateRangeMax:Date): Holiday[] {
    return holidays.filter(h => new Date(h.startDate) >= dateRangeMin && new Date(h.endDate) <= dateRangeMax)
    }

}
