import {Product} from "./product.model";
export class Supplier {
   constructor(
       public supplierId?: number,
       public name?: string,
       public surname?: string,
       public products?: Product[]
   ) {}
}