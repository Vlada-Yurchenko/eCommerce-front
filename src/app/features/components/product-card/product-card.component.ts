import {Component, Input} from '@angular/core';
import {CustomInputComponent} from "../../../core/components/custom-input/custom-input.component";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    CustomInputComponent,
    TitleCasePipe
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
