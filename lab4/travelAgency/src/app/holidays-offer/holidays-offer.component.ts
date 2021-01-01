import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { element } from 'protractor';
import { FilterInteractionService } from '../services/filter-interaction.service';
import { InteractionService } from '../services/interaction.service';
import { TrolleyInteractionService } from '../services/trolley-interaction.service';

interface IHoliday{
  name: string,
  country: string,
  startDate: Date,
  endDate: Date,
  price: number,
  maxPlaces:  number,
  description: string,
  imgSrc: string,
  rating: number;
}

interface IReserved{
  name: string;
  amount: number;
  price: number;
}

@Component({
  selector: 'app-holidays-offer',
  templateUrl: './holidays-offer.component.html',
  styleUrls: ['./holidays-offer.component.css']
})
export class HolidaysOfferComponent implements OnInit {
  // Holiday Array Begining
  public holidays = new Array<IHoliday>(
    {
      name: "słoneczne wybrzeze",
      country: "turcja",
      startDate: new Date(2021, 6, 20),
      endDate: new Date(2021, 6, 27),
      price: 700,
      maxPlaces:  10,
      description: "Malowniczo położony, tuż przy pięknej plaży omywanej turkusowymi wodami Morza Egejskiego hotel oferuje niezapomniane chwile",
      imgSrc: "https://a.loveholidays.com/images/holidays/fede33b090c05cf5d6c61cc54ce04b2ec97408bf/holidays/turkey/antalya/belek/granada-luxury-belek-all-inclusive-0.jpg",
      rating: 0
    },
    {
      name: "gorące włochy",
      country: "włochy",
      startDate: new Date(2021, 7, 21),
      endDate: new Date(2021, 7, 27),
      price: 900,
      maxPlaces:  12,
      description: "Malowniczo położony, tuż przy pięknej plaży omywanej turkusowymi wodami Morza Egejskiego hotel oferuje niezapomniane chwile",
      imgSrc: "https://www.wantedinrome.com/i/preview/storage/uploads/2020/04/holiday_housing.jpg",
      rating: 0
    },
    {
      name: "wisienki?",
      country: "japonia",
      startDate: new Date(2021, 2, 22),
      endDate: new Date(2021, 2, 29),
      price: 1800,
      maxPlaces:  20,
      description: "Malowniczo położony, tuż przy pięknej plaży omywanej turkusowymi wodami Morza Egejskiego hotel oferuje niezapomniane chwile",
      imgSrc: "https://s3.viva.pl/styl-zycia/japonia-453204-GALLERY_BIG.jpg",
      rating: 0
    },
    {
      name: "niezapomniana austria",
      country: "austria",
      startDate: new Date(2021, 0, 21),
      endDate: new Date(2021, 0, 26),
      price: 750,
      maxPlaces:  8,
      description: "Malowniczo położony, tuż przy pięknej plaży omywanej turkusowymi wodami Morza Egejskiego hotel oferuje niezapomniane chwile",
      imgSrc: "https://assets.website-files.com/5c6a862c3ca6bd4ca53749b8/5c890448590eda0da24a8c71_DSC02678.jpg",
      rating: 0
    },
    {
      name: "boskie wakacje",
      country: "grecja",
      startDate: new Date(2021, 5, 18),
      endDate: new Date(2021, 5, 25),
      price: 800,
      maxPlaces:  16,
      description: "Malowniczo położony, tuż przy pięknej plaży omywanej turkusowymi wodami Morza Egejskiego hotel oferuje niezapomniane chwile",
      imgSrc: "https://4.bp.blogspot.com/-ox8U-HE2oLE/XEwcphSOueI/AAAAAAAAOeM/gYPenPO3Z0cLhDmc1-M54kNy8wT1SD9AACLcBGAs/s1600/Road%2BTrip%2Bof%2Bthe%2BGods%252C%2BParthenon.jpg",
      rating: 0
    },
    {
      name: "swego nie znacie",
      country: "polska",
      startDate: new Date(2021, 4, 1),
      endDate: new Date(2021, 4, 6),
      price: 500,
      maxPlaces:  10,
      description: "Malowniczo położony, tuż przy pięknej plaży omywanej turkusowymi wodami Morza Egejskiego hotel oferuje niezapomniane chwile",
      imgSrc: "https://cdn.pkt.pl/f-4403-wczasy-w-polsce-czyli-co-oferuja-osrodki-wypoczynkowe-na-mazurach.jpg",
      rating: 3
    },
    {
      name: "poranna herbata",
      country: "anglia",
      startDate: new Date(2021, 8, 2),
      endDate: new Date(2021, 8, 9),
      price: 1000,
      maxPlaces:  6,
      description: "Malowniczo położony, tuż przy pięknej plaży omywanej turkusowymi wodami Morza Egejskiego hotel oferuje niezapomniane chwile",
      imgSrc: "https://di5fgdew4nptq.cloudfront.net/api2/media/images/f8147872-890b-e611-80cb-c81f66f7476e",
      rating: 1
    },
    {
      name: "bez pośpiechu",
      country: "francja",
      startDate: new Date(2021, 7, 14),
      endDate: new Date(2021, 7, 23),
      price: 1200,
      maxPlaces:  14,
      description: "Malowniczo położony, tuż przy pięknej plaży omywanej turkusowymi wodami Morza Egejskiego hotel oferuje niezapomniane chwile",
      imgSrc: "https://aws-tiqets-cdn.imgix.net/images/content/2e6eebee20804cacab6d5cb9ecac49c6.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=e20f24af8ce54bbbcbf8f2df0d221427",
      rating: 0
    },
  )
    // Holidays Array End

  public sumOfAllReserved :number;
  public reservedHolidays: Array<IReserved>;

  public minPrice: number;
  public maxPrice: number;

  //tests
  public locations = []
  public stars = []
  public priceRangeMin = Number.MIN_VALUE;
  public priceRangeMax = Number.MAX_VALUE;
  public dateRangeMin = new Date(1970, 0, 1);
  public dateRangeMax = new Date(2030, 11, 30);

  @Input() elementToAdd: IHoliday;
  @Input() shouldAdd: boolean;
  @Output() shouldAddEmitter = new EventEmitter;

  constructor(private _interactionService: InteractionService, private _interactionFilterService: FilterInteractionService, private _interactionTrolleyService: TrolleyInteractionService) { 
    this.updateMaxMinPrices();
  }

  ngOnInit(): void {
    this.sumOfAllReserved = this._interactionTrolleyService.getSumOfAllReserved();
    this.reservedHolidays = this._interactionTrolleyService.getReservedHolidays();
    this._interactionService.elementToAdd$.subscribe(
      element => {this.addCard(element)}
    )
    this.sendDataToFilters();

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
  }

  sendDataToFilters(){    
    this._interactionFilterService.sendCurrentDataToFilters(this.holidays)
  }

  addCard(elementToAdd: IHoliday){
    this.holidays = [...this.holidays, elementToAdd]


    this.updateMaxMinPrices();

    this.sendDataToFilters();
  }

  removeCard(cardToRemove : IHoliday){
    console.log("jestem w removeCard");
    
    this.holidays = this.holidays.filter(x => x != cardToRemove)
    this.updateMaxMinPrices();
    
    this.sendDataToFilters();
  }

  updateSumOfAll(data2){
    this.sumOfAllReserved += data2.value; 
    this.updateReservedHolidays(data2)
    this._interactionTrolleyService.setSumOfAllReserved(this.sumOfAllReserved)
  }

  updateReservedHolidays(data2){
    if(this.reservedHolidays.find(e => (e.name == data2.holiday.name))){
      const obj: IReserved = this.reservedHolidays.find(e => (e.name == data2.holiday.name))
      if(data2.value == 1){
        obj.amount = obj.amount + 1
      }
      else if(data2.value == -1){
        obj.amount = obj.amount - 1 
        if(obj.amount == 0){
          this.reservedHolidays = this.reservedHolidays.filter(e => e.name != obj.name)
        }
      } // we remove whole element
      else{
        this.reservedHolidays = this.reservedHolidays.filter(e => e.name != obj.name)
      }
    }
    else{
      if(data2.value == 1){
        this.reservedHolidays.push({
          name: data2.holiday.name,
          amount: 1,
          price: data2.holiday.price
        })
      }
    }
    this._interactionTrolleyService.setReservedHolidays(this.reservedHolidays)
    // console.log(this.reservedHolidays);
  }

  updateMaxMinPrices(){
    this.maxPrice = Math.max(...this.holidays.map(holiday => holiday.price))
    this.minPrice = Math.min(...this.holidays.map(holiday => holiday.price))
    console.log(this.maxPrice + " " + this.minPrice);
    
  }

  updateRating(holiday: IHoliday){
    this.holidays.find(h => h.name === holiday.name).rating = holiday.rating;
    this.sendDataToFilters();
  }

}
