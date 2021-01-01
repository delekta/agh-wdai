import {HomePageComponent} from './home-page/home-page.component';
import {PostsComponent} from './posts/posts.component'
import {PhotosComponent} from './photos/photos.component'
import {AddPostComponent} from './add-post/add-post.component'

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'homePage', pathMatch: 'full' },
  { path: 'homePage', component: HomePageComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'addPost', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
