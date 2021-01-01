import { Component, OnInit } from '@angular/core';
import {Post} from './post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: Array<Post>;

  constructor() { }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setPosts(json))
  }

  setPosts(json){
    this.posts = json;
  }

}
