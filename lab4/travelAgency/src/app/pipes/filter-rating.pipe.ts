import { Pipe, PipeTransform } from '@angular/core';
import {Holiday} from '../holidays-offer-element/holiday'

@Pipe({
  name: 'filterRating'
})
export class FilterRatingPipe implements PipeTransform {

  transform(holidays: Holiday[], ratings: number[]): Holiday[] {
    if(ratings.length < 1){
      return holidays
    }
    else{
      return holidays.filter(h => ratings.indexOf(h.rating) !== -1)
    }
  }

}
