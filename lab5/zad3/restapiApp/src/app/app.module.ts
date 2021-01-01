import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { AddPostComponent } from './add-post/add-post.component';

import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    PostsComponent,
    PhotosComponent,
    PostDetailsComponent,
    PhotoDetailsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
