import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ProductCardComponent} from "./features/components/product-card/product-card.component";
import {ProductCardListComponent} from "./features/components/product-card-list/product-card-list.component";
import {FeaturesComponent} from "./features/features.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent, ProductCardListComponent, RouterLink, RouterLinkActive, FeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eCommerce-front';
}
