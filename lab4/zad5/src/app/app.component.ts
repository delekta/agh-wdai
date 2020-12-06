import { Component , ViewChildren, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public brands: string[] = ["audi", "bmw", "mercedes-benz", "volkswagen", "porsche", "lamborghini"]
  public models = {
    "audi": ["a4", "a6", "a7"],
    "bmw": ["m2", "m3", "m5"],
    "mercedes-benz": ["e-klasa", "c-klasa", "g-klasa"],
    "volkswagen": ["tiguan", "arteon", "polo", "transporter"],
    "porsche": ["cayenee", "spider", "cayman", "911"],
    "lamborghini": ["urus", "huracan"]
  }
  public colors= {
    "a4": ["blue", "violet", "green", "chocolate"],
    "a5": ["black", "red", "lightgreen"],
    "a6": ["lightblue", "lightred", "pink"],
    "a7": ["brown", "orange"],
    "m2": ["blue", "red", "yellow"],
    "m3": ["lightblue", "orange", "green"],
    "m5": ["gray", "lightred", "lightgreen", "cyan", "crimson"],
    "e-klasa": ["gray", "red", "green"],
    "c-klasa": ["lightgray", "brown", "aqua"],
    "g-klasa": ["white", "lightred", "orange"],
    "tiguan": ["lightblue", "lightred", "pink"],
    "arteon": ["blue", "red", "yellow"],
    "polo": ["aqua", "orange", "lightgreen"],
    "transporter": ["white", "brown", "green"],
    "cayenee": ["gray", "red", "green"],
    "spider": ["lightgray", "lightred", "lightgreen"],
    "cayman": ["blue", "violet", "pink"],
    "911": ["brown", "orange", "yellow"],
    "urus": ["orange", "coral", "green"],
    "huracan": ["aqua", "lightblue", "chartreuse"],
  }

  public currentModels: string[];
  public currentColors: string[];

  public currentModel: string;
  public currentBrand: string;
  public currentColor: string;

  public isBrandChoosed = false;
  public isModelChoosed = false;
  public isColorChoosed = false;

  chooseBrand(event, brand:string){
    let list = event.currentTarget.parentNode;
    this.resetList(list);

    event.currentTarget.classList.add("active")
    
    this.isBrandChoosed = true;

    this.isModelChoosed = false;
    this.currentModel = undefined;
    
    this.isColorChoosed = false;
    this.currentColor = undefined;

    this.currentBrand = brand;
    this.currentModels = this.models[this.currentBrand];
  }

  chooseModel(event, model:string){
    let list = event.currentTarget.parentNode;
    this.resetList(list);
    
    event.currentTarget.classList.add("active")

    this.isModelChoosed = true;

    this.isColorChoosed = false;
    this.currentColor = undefined;

    this.currentModel = model;
    this.currentColors = this.colors[this.currentModel];
  }

  chooseColor(event, color:string){
    let list = event.currentTarget.parentNode;
    this.resetList(list);
    
    event.currentTarget.classList.add("active")

    this.isColorChoosed = true;
    this.currentColor = color;
    
  }

  resetList(list){
    let liArray: HTMLCollectionOf<HTMLLIElement> = list.getElementsByTagName("li")
    for(let i = 0; i < liArray.length; i++){
      if(liArray[i].classList.contains("active")){
        liArray[i].classList.remove("active");
      }
    }
  }

}
