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
  name: 'filterDate'
})

export class FilterDatePipe implements PipeTransform {

  transform(holidays: IHoliday[], dateRangeMin:Date, dateRangeMax:Date): IHoliday[] {
    return holidays.filter(h => h.startDate >= dateRangeMin && h.endDate <= dateRangeMax)
    }

}
