import {Component, Input} from '@angular/core';
import {CustomInputComponent} from "../custom-input/custom-input.component";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    CustomInputComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
   @Input() currentProductName = '';
  addItem(value: string) {
    this.currentProductName = value
  }
}
