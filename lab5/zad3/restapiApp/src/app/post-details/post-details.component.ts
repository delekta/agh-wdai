import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../posts/post'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() public post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
