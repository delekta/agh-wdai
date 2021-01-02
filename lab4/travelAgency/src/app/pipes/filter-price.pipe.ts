import { Pipe, PipeTransform } from '@angular/core';
import {Holiday} from '../holidays-offer-element/holiday'

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(holidays: Holiday[], priceRangeMin:number, priceRangeMax:number): Holiday[] {
    return holidays.filter(h => h.price >= priceRangeMin && h.price <= priceRangeMax)
  }

}
