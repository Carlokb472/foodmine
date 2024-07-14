import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { UserService } from '../../../services/user.service';
import { CartService } from '../../../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TextInputComponent } from '../../partials/text-input/text-input.component';
import { TitleComponent } from '../../partials/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { MapComponent } from '../../partials/map/map.component';
@Component({
  selector: 'check-out-page',
  standalone: true,
  imports: [TextInputComponent,TitleComponent,FormsModule,ReactiveFormsModule,OrderItemsListComponent,MapComponent ],
  templateUrl: './check-out-page.component.html',
  styleUrl: './check-out-page.component.css'
})
export class CheckOutPageComponent {
  order:Order = new Order();
  checkoutForm!: FormGroup;
  constructor(cartService:CartService,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private toastrService: ToastrService) {
                const cart = cartService.getCart();
                this.order.items = cart.items;
                this.order.totalPrice = cart.totalPrice;
              }

  ngOnInit(): void {
    let {name, address} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name:[name, Validators.required],
      address:[address, Validators.required]
    });
  }

  get fc(){
    return this.checkoutForm.controls;
  }

  createOrder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    console.log(this.order);
  }
}
