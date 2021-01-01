import { Component, Input, OnInit } from '@angular/core';
import {Photo} from '../photos/photo'
@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  @Input() public photo: Photo;

  constructor() { }

  ngOnInit(): void {
  }

}
