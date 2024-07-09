import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!:Food;
  constructor(activatedRoute: ActivatedRoute,foodService: FoodService,private cartService: CartService,private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.food = foodService.getFoodById(params.id);
    })
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
