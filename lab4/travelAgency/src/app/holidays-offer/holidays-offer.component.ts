import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { element } from 'protractor';
import { FilterInteractionService } from '../services/filter-interaction.service';
import { InteractionService } from '../services/interaction.service';
import { TrolleyInteractionService } from '../services/trolley-interaction.service';
import {Holiday} from '../holidays-offer-element/holiday'
import { HolidaysService } from '../services/holidays.service';
import { map } from 'rxjs/operators';
import {ReservedHoliday} from './reservedHoliday'

@Component({
  selector: 'app-holidays-offer',
  templateUrl: './holidays-offer.component.html',
  styleUrls: ['./holidays-offer.component.css']
})
export class HolidaysOfferComponent implements OnInit {
  public holidays: any = [];
    // Holidays Array End

  public sumOfAllReserved :number;
  public reservedHolidays: Array<ReservedHoliday>;

  public minPrice: number;
  public maxPrice: number;

  //tests
  public locations = []
  public stars = []
  public priceRangeMin = Number.MIN_VALUE;
  public priceRangeMax = Number.MAX_VALUE;
  public dateRangeMin = new Date(1970, 0, 1);
  public dateRangeMax = new Date(2030, 11, 30);

  @Input() elementToAdd: Holiday;
  @Input() shouldAdd: boolean;
  @Output() shouldAddEmitter = new EventEmitter;

  constructor(private _interactionService: InteractionService, private _interactionFilterService: FilterInteractionService, private _interactionTrolleyService: TrolleyInteractionService
    ,private _interactionHolidaysService: HolidaysService) { 
  }

  ngOnInit(): void {
    this.getHolidaysList()
    this.sumOfAllReserved = this._interactionTrolleyService.getSumOfAllReserved();
    this.reservedHolidays = this._interactionTrolleyService.getReservedHolidays();
    this._interactionService.elementToAdd$.subscribe(
      element => {this.addCard(element)}
    )
    this._interactionFilterService.locations$.subscribe(
      location => {
        this.locations = location
      }
    )

    this._interactionFilterService.stars$.subscribe(
      stars => {
        this.stars = stars
      }
    )

    this._interactionFilterService.minPrice$.subscribe(
      minPrice => {this.priceRangeMin = minPrice}
    )

    this._interactionFilterService.maxPrice$.subscribe(
      maxPrice => {this.priceRangeMax = maxPrice}
    )
    
    this._interactionTrolleyService.numberOfReserved$.subscribe(
      sum => {this.sumOfAllReserved = sum}
    )

    this.holidays = this.holidays;
  }

  getHolidaysList() {
    this._interactionHolidaysService.getHolidaysList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => // [???]
          ( 
            {key: c.payload.key, ...c.payload.val()}
          )
        )
      )
    ).subscribe(
      holidays => {
        this.holidays = <Array<Holiday>>holidays;
        this.updateMaxMinPrices();
        this.sendDataToFilters(); 
      }
    );
  }

  deleteFromDataBase(cardToRemove : Holiday){
    this._interactionHolidaysService.deleteHoliday(cardToRemove.key)
  }

  sendDataToFilters(){    
    this._interactionFilterService.sendCurrentDataToFilters(this.holidays)
  }

  addCard(elementToAdd: Holiday){
    this.holidays = [...this.holidays, elementToAdd]
    this.updateMaxMinPrices();
    this.sendDataToFilters();
  }

  removeCard(cardToRemove : Holiday){
    this.holidays = this.holidays.filter(x => x != cardToRemove)
    this.updateMaxMinPrices();
    this.sendDataToFilters();
    this.deleteFromDataBase(cardToRemove)
  }

  updateMaxMinPrices(){
    this.maxPrice = Math.max(...this.holidays.map(holiday => holiday.price))
    this.minPrice = Math.min(...this.holidays.map(holiday => holiday.price)) 
  }

}
