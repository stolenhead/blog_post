import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PostComponent } from './views/post/post.component';
const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'post/:id',
    component: PostComponent
  },
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
