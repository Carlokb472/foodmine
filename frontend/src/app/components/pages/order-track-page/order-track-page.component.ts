import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Order } from '../../../shared/models/Order';
import { OrderService } from '../../../services/order.service';
import { TitleComponent } from '../../partials/title/title.component';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { MapComponent } from '../../partials/map/map.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order-track-page',
  standalone: true,
  imports: [OrderItemsListComponent, TitleComponent,MapComponent,CommonModule],
  templateUrl: './order-track-page.component.html',
  styleUrl: './order-track-page.component.css'
})
export class OrderTrackPageComponent {
  order!:Order;
  constructor(activatedRoute: ActivatedRoute,
              orderService:OrderService) {
     const params = activatedRoute.snapshot.params;
     if(!params.orderId) return;

     orderService.trackOrderById(params.orderId).subscribe(order => {
       this.order = order;
     })

  }
  ngOnInit(): void {
  }
}
