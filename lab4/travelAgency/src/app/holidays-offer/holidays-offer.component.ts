import { Component, OnInit } from '@angular/core';

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
    },
    {
      name: "niezapomniana austria",
      country: "austra",
      startDate: new Date(2021, 0, 21),
      endDate: new Date(2021, 0, 26),
      price: 750,
      maxPlaces:  8,
      description: "Malowniczo położony, tuż przy pięknej plaży omywanej turkusowymi wodami Morza Egejskiego hotel oferuje niezapomniane chwile",
      imgSrc: "https://assets.website-files.com/5c6a862c3ca6bd4ca53749b8/5c890448590eda0da24a8c71_DSC02678.jpg",
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
    },
  )
    // Holidays Array End
  constructor() { }

  ngOnInit(): void {
  }

}
