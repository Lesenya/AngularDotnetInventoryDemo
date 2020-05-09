import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Repository } from "./repository";

@Injectable()
export class Cart {
    constructor(private repo: Repository) {
        this.repo.getSessionData<ProductSelection[]>("cart").subscribe(res => {
            if(res != null) {
                res.forEach(item => {
                    this.selections.push(item);
                    this.update(false);
                });
            }
        });
    }
    public selections: ProductSelection[] = [];
    public itemCount: number = 0;
    public totalPrice: number = 0;

    public addProduct(product: Product) {
        let selection = this.selections.find(p => p.productId == product.productId);
        if (selection) {
            selection.quantity++;
        } else {
            let selection: ProductSelection = new ProductSelection(this, product.productId, product.name, product.price, 1);
            this.selections.push(selection);
            this.update();
        }
    }
    public updateQuantity(productId: number, quantity: number) {
        if(quantity > 0) {
             let selection = this.selections.find(s => s.productId == productId);
             if (selection) {
                 selection.quantity = quantity;
             }   
        } else {
            let index = this.selections.findIndex(s => s.productId == productId);
            if(index > -1) {
                this.selections.splice(index, 1);
                this.update();
            }
        }
    }
    public update(storeData: boolean = true) {
        this.itemCount = this.selections
        .map(s => s.quantity)
        .reduce((prev, cur) => prev + cur, 0);
        
        this.totalPrice = this.selections
        .map(s => s.price * s.quantity)
        .reduce((prev, cur)=> prev + cur,0);
        if(storeData) {
            let data = this.selections.map(s => {
                return {productId: s.productId, name: s.name, price: s.price, quantity: s.quantity}
            });
            this.repo.storeSessionData("cart", data);
        }
    }
    public clear() {
        this.selections = [];
        this.update();
    }
}

export class ProductSelection {
    constructor(
        public cart: Cart,
        public productId?: number,
        public name?: string,
        public price?: number,
        private quantityValue?: number
    ) {}
    public get quantity(): number {
        return this.quantityValue;
    }
    public set quantity(newValue: number) {
        this.quantityValue = newValue;
        this.cart.update();
    }
} 