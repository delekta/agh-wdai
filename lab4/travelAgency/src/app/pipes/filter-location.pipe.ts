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
}

@Pipe({
  name: 'filterLocation'
})
export class FilterLocationPipe implements PipeTransform {

  transform(holidays: IHoliday[], locations: string[]): IHoliday[] {
    if(locations.length < 1){
      return holidays
    }
    else{
      return holidays.filter(h => locations.indexOf(h.country) !== -1)
    }
  }

}
 