import { Component } from '@angular/core';
import {ProductCardListComponent} from "./components/product-card-list/product-card-list.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    ProductCardListComponent
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {

}
