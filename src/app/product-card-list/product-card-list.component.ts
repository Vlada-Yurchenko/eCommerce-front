import { Component } from '@angular/core';
import {ProductCardComponent} from "../product-card/product-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'product-card-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    CommonModule

  ],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css'
})
export class ProductCardListComponent {
  public items = new Array(4).fill('test')
}
