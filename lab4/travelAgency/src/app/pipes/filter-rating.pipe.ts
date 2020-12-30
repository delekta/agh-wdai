import { Pipe, PipeTransform } from '@angular/core';

interface IHoliday{
  name: string,
  country: string,
  startDate: Date,
  endDate: Date,
  price: number,
  maxPlaces:  number,
  description: string,
  imgSrc: string,
  rating: number,
}

@Pipe({
  name: 'filterRating'
})
export class FilterRatingPipe implements PipeTransform {

  transform(holidays: IHoliday[], ratings: number[]): IHoliday[] {
    if(ratings.length < 1){
      return holidays
    }
    else{
      return holidays.filter(h => ratings.indexOf(h.rating) !== -1)
    }
  }

}
