import { Routes } from '@angular/router';
import {LoginComponent} from "./features/components/login/login.component";
import {ProductCardListComponent} from "./features/components/product-card-list/product-card-list.component";

export const routes: Routes = [ { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductCardListComponent },];
