import {Component, OnInit} from '@angular/core';
import {ProductCardComponent} from "../product-card/product-card.component";
import {CommonModule} from "@angular/common";
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/product.model";

@Component({
  selector: 'product-card-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    CommonModule,
  ],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css',
})
export class ProductCardListComponent implements OnInit {
  // public items = new Array(4).fill('test')
  public items: IProduct[] = [];

  constructor(private productService: ProductsService) {
  }
  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => this.items = data)
  }

}
