import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import {RouterModule} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
@Component({
  selector: 'homePage',
  standalone: true,
  imports: [RouterModule,CommonModule,SearchComponent,TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[] = [];
  constructor(private foodService:FoodService,activatedRoute: ActivatedRoute) {
    this.foods = foodService.getAll();
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
       this.foods = foodService.getAll()
    })

  }
  ngOnInit(): void {
  }
}
