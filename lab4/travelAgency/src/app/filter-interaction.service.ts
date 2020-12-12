import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class FilterInteractionService {
  private _currentHolidays = new Subject<IHoliday[]>()
  holidays$ = this._currentHolidays.asObservable(); 

  private _filteredLocations = new Subject<string[]>()
  locations$ = this._filteredLocations.asObservable(); 

  private _filteredStars = new Subject<number[]>()
  stars$ = this._filteredStars.asObservable(); 

  private _filteredMinPrice = new Subject<number>()
  minPrice$ = this._filteredMinPrice.asObservable(); 

  private _filteredMaxPrice = new Subject<number>()
  maxPrice$ = this._filteredMaxPrice.asObservable(); 


  sendCurrentDataToFilters(holidays: IHoliday[]){
    this._currentHolidays.next(holidays)
  }

  sendFilteredLocations(locations: string[]){
    this._filteredLocations.next(locations)
  }

  sendFilteredStars(stars: number[]){
    this._filteredStars.next(stars)
  }

  sendMaxPrice(maxPrice: number){
    this._filteredMaxPrice.next(maxPrice)
  }

  sendMinPrice(minPrice: number){
    this._filteredMinPrice.next(minPrice)
  }
}
