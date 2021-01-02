import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Holiday} from '../holidays-offer-element/holiday'

@Injectable({
  providedIn: 'root'
})
export class FilterInteractionService {
  private _currentHolidays = new Subject<Holiday[]>()
  holidays$ = this._currentHolidays.asObservable(); 

  private _filteredLocations = new Subject<string[]>()
  locations$ = this._filteredLocations.asObservable(); 

  private _filteredStars = new Subject<number[]>()
  stars$ = this._filteredStars.asObservable(); 

  private _filteredMinPrice = new Subject<number>()
  minPrice$ = this._filteredMinPrice.asObservable(); 

  private _filteredMaxPrice = new Subject<number>()
  maxPrice$ = this._filteredMaxPrice.asObservable(); 


  sendCurrentDataToFilters(holidays: Holiday[]){
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
