import { Product } from "./product.model";
import { Supplier } from "./supplier.model";

export class Repository {
    constructor() {
        this.product = {productId: 1, name: "Prod 1", description: "Description", price: 230};
    }
    public product: Product
    public supplier: Supplier
}