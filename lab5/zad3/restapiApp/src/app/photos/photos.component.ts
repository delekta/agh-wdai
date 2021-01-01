import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public photos: Array<Photo>;
  constructor() { }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => this.setPhotos(json))
  }

  setPhotos(json){
    this.photos = json.slice(0, 100);
  }

}
