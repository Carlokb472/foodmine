import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckOutPageComponent } from './components/pages/check-out-page/check-out-page.component';
import { AuthGuard} from './auth/guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search/:searchTerm', component: HomeComponent },
    {path:'tag/:tag',component:HomeComponent},
    {path:'food/:id', component:FoodPageComponent},
    {path:'cart-page',component:CartPageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'register',component:RegisterPageComponent}, 
    {path:'checkout',component:CheckOutPageComponent,canActivate:[AuthGuard]}, 
  ];
  


export class AppRoutingModule { }
