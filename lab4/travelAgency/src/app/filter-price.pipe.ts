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
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(holidays: IHoliday[], priceRangeMin:number, priceRangeMax:number): IHoliday[] {
  return holidays.filter(h => h.price >= priceRangeMin && h.price <= priceRangeMax)
  }

}
