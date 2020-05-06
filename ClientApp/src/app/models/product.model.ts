import { Supplier } from "./supplier.model";

export class Product {
    constructor(
        public productId?: number,
        public name?: string,
        public description?: string,
        public price?: number,
        public category?: string,
        public supplier?: Supplier
    ) {}
}