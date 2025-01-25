import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../sections/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { authGuard } from '../guards/auth.guard';
import { DashboardCategoriesComponent } from './dashboard-categories/dashboard-categories.component';
import { DashboardSubscribersComponent } from './dashboard-subscribers/dashboard-subscribers.component';
import { AllPostsComponent } from './dashboard-posts/all-posts/all-posts.component';
import { DashboardCommentsComponent } from './dashboard-comments/dashboard-comments.component';
import { NewPostComponent } from './dashboard-posts/new-post/new-post.component';
import { ErrorPageComponent } from '../shared-components/error-page/error-page.component';
import { loggedInGuard } from '../guards/logged-in.guard';
import { exitNewPostGuard } from '../guards/exit-new-post.guard';


const routes: Routes = [
  { path : '', component : LoginComponent, canActivate : [loggedInGuard]},
  { path : '', component: DashboardComponent , children :[
    { path : 'home', component : DashboardHomeComponent, canActivate : [authGuard]},
    { path : 'categories', component : DashboardCategoriesComponent, canActivate : [authGuard]},
    { path : 'subscribers', component : DashboardSubscribersComponent, canActivate : [authGuard]},
    { path : 'posts', component : AllPostsComponent, canActivate : [authGuard]},
    { path : 'comments', component : DashboardCommentsComponent, canActivate : [authGuard]},
    { path : 'posts/new', component : NewPostComponent, canActivate : [authGuard],canDeactivate:[exitNewPostGuard]},
    { path : '**', component : ErrorPageComponent, canActivate : [authGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }