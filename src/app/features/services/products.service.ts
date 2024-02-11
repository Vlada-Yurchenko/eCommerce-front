import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/product.model";

const BASE_URL = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(BASE_URL)
  }
}
