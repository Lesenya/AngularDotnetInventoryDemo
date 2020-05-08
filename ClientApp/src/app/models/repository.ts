import { Product } from "./product.model";
import { Supplier } from "./supplier.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class Repository {
    constructor(private http: HttpClient) {
        this.getProducts();
    }
    public product: Product;
    public products: Product[]
    public supplier: Supplier;
    public suppliers: Supplier[];

    public getProduct(id: number) {
        this.http.get<Product>(`/api/products/${id}`).subscribe(res => {
            this.product = res;
        });
    }
    public getProducts(related: boolean = false) {
        this.http.get<Product[]>(`/api/products?related=${related}`).subscribe(res => {
            this.products = res;
        });
    }
    public createProduct(prod: Product) {
        let data = {
            name: prod.name, 
            category: prod.category,
            description: prod.description,
            price: prod.price,
            supplier: prod.supplier ? prod.supplier.supplierId : 0
        }
        this.http.post<number>(`/api/products`, data).subscribe(res => {
            prod.productId = res;
            this.products.push(prod);
        });
    }
    public updateProduct(prod: Product) {
        let data = {
            name: prod.name, 
            category: prod.category,
            description: prod.description,
            price: prod.price,
            supplier: prod.supplier ? prod.supplier.supplierId : 0
        }
        this.http.put<number>(`/api/products/${prod.productId}`, data).subscribe(res => {
            prod.productId = res;
            this.products.push(prod);
        });
    }
    public deleteProduct(id: number) {
        this.http.delete(`/api/products/${id}`).subscribe(res => {
            this.getProducts();
        });
    }
    //suppliers api
    public getSupplier(id: number) {
        this.http.get<Supplier>(`/api/suppliers/${id}`).subscribe(res => {
            this.supplier = res;
        });
    }
    public getSuppliers() {
        this.http.get<Supplier[]>(`/api/suppliers`).subscribe(res => {
            this.suppliers = res;
        });
    }
    public createSupplier(sup: Supplier) {
        let data = {name: sup.name, surname: sup.surname, location: sup.location};
        this.http.post<number>(`/api/suppliers`, data).subscribe(res => {
            sup.supplierId = res;
            this.suppliers.push(sup);
        });
    }
    public updateSupplier(sup: Supplier) {
        let data = {name: sup.name, surname: sup.surname, location: sup.location};
        this.http.put<number>(`/api/suppliers/${sup.supplierId}`, data).subscribe(res => {
            sup.supplierId = res;
            this.suppliers.push(sup);
        });
    }
    public deleteSupplier(id: number) {
        this.http.delete(`/api/suppliers/${id}`).subscribe(res => {
            this.getSuppliers();
        });
    }
}