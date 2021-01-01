import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  newPost = new FormGroup({
    userId: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    body: new FormControl(null, Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: form.title,
        body: form.body,
        userId: parseInt(form.userId),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    alert("Post został dodany!")
    this.newPost.reset();
  } 

}
