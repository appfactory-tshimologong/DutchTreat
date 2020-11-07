import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Product } from "./product";
import * as OrderNS from "./order";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public order: OrderNS.Order = new OrderNS.Order;

    public products:Product[] = [];

    public loadProducts(): Observable<boolean> {

        return this.http.get("/api/products")
            .pipe(
                map((data: any[]) =>
                {
                    this.products = data;
                    return true;
                }
                ));
    }

    public AddToOrder(newProduct: Product) {
       
        let item: OrderNS.OrderItem = this.order.items.find(i => i.productId == newProduct.id);

        if (item!=undefined) {
            item.quantity++
        } else {
            let item = new OrderNS.OrderItem;
            item.productId = newProduct.id;
            item.productArtist = newProduct.artist;
            item.productArtId = newProduct.artId;
            item.productCategory = newProduct.category;
            item.productSize = newProduct.size;
            item.productTitle = newProduct.title;
            item.unitPrice = newProduct.price;
            item.quantity = 1;

            this.order.items.push(item);

        }

        
    }
}