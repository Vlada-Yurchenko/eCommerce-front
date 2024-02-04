import { Routes } from '@angular/router';
import {LoginComponent} from "./features/login/login.component";
import {ProductCardListComponent} from "./product-card-list/product-card-list.component";

export const routes: Routes = [ { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductCardListComponent },];
