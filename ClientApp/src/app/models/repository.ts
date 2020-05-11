import { Product } from "./product.model";
import { Supplier } from "./supplier.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order, OrderConfirmation } from "./order.model";

const productsUrl = '/api/products';
const supplierUrl = '/api/suppliers';
const sessionUrl = '/api/session';
const ordersUrl = '/api/orders'
@Injectable()
export class Repository {
    constructor(private http: HttpClient) {
        this.getProducts();
    }
    public product: Product;
    public products: Product[]
    public supplier: Supplier;
    public suppliers: Supplier[];
    public orders: Order[];

    public getProduct(id: number) {
        this.http.get<Product>(`${productsUrl}/${id}`).subscribe(res => {
            this.product = res;
        });
    }
    public getProducts(related: boolean = false) {
        this.http.get<Product[]>(`${productsUrl}?related=${related}`).subscribe(res => {
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
        this.http.post<number>(`${productsUrl}`, data).subscribe(res => {
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
        this.http.delete(`${productsUrl}/${id}`).subscribe(res => {
            this.getProducts();
        });
    }
    //suppliers api
    public getSupplier(id: number) {
        this.http.get<Supplier>(`${supplierUrl}/${id}`).subscribe(res => {
            this.supplier = res;
        });
    }
    public getSuppliers() {
        this.http.get<Supplier[]>(`${supplierUrl}`).subscribe(res => {
            this.suppliers = res;
        });
    }
    public createSupplier(sup: Supplier) {
        let data = {name: sup.name, surname: sup.surname, location: sup.location};
        this.http.post<number>(`${supplierUrl}`, data).subscribe(res => {
            sup.supplierId = res;
            this.suppliers.push(sup);
        });
    }
    public updateSupplier(sup: Supplier) {
        let data = {name: sup.name, surname: sup.surname, location: sup.location};
        this.http.put<number>(`${supplierUrl}/${sup.supplierId}`, data).subscribe(res => {
            sup.supplierId = res;
            this.suppliers.push(sup);
        });
    }
    public deleteSupplier(id: number) {
        this.http.delete(`${supplierUrl}/${id}`).subscribe(res => {
            this.getSuppliers();
        });
    }
    //session data functions
    public storeSessionData<T>(dataType: string, data: T) {
        this.http.post(`${sessionUrl}/${dataType}`, data).subscribe(res => {});
    }
    public getSessionData<T>(dataType: string): Observable<T> {
        return this.http.get<T>(`${sessionUrl}/${dataType}`);
    }

    //orders
    public getOrders() {
        this.http.get<Order[]>(ordersUrl).subscribe(res => {
            this.orders = res;
        });
    }
    createOrder(order: Order) {
        let data = {
            name: order.name,
            address: order.address,
            payment: order.payment,
            products: order.products
            };
        this.http.post<OrderConfirmation>(ordersUrl, data).subscribe(data => {
            order.orderConfirmation = data
            order.cart.clear();
            order.clear();
            }
        );
    }
    shipOrder(order: Order) {
        this.http.post(`${ordersUrl}/${order.orderId}`, {}).subscribe(() => this.getOrders())
    }
}