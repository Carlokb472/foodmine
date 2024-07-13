import { Component,Input, OnInit } from '@angular/core';
import { InputContainerComponent } from '../input-container/input-container.component';
import { AbstractControl, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from '../input-validation/input-validation.component';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [InputContainerComponent,ReactiveFormsModule,InputValidationComponent],
  templateUrl: './text-input.component.html',  
  styleUrl: './text-input.component.css'
})
export class TextInputComponent implements OnInit {
  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen:boolean = true;
  @Input()
  label!: string;
  @Input()
  type: 'text' | 'password' | 'email' = 'text';
  
  get formControl(){
    return this.control as FormControl;
  }
  constructor() { }
  
    ngOnInit(): void {
    }
  
  }