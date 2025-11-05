var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Simple method decorator to log before and after
function LogChange(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`[LogChange] Calling ${propertyKey} with`, args);
        const result = original.apply(this, args);
        console.log(`[LogChange] New state of product:`, this.toString());
        return result;
    };
    return descriptor;
}
// Product class implementing IProduct
class Product {
    constructor(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this._price = price;
        this._stock = stock;
    }
    get price() { return this._price; }
    get stock() { return this._stock; }
    // Methods to update price and stock with logging
    setPrice(newPrice) {
        if (newPrice < 0)
            throw new Error('Price cannot be negative');
        this._price = newPrice;
    }
    setStock(newStock) {
        if (!Number.isInteger(newStock) || newStock < 0)
            throw new Error('Stock must be a non-negative integer');
        this._stock = newStock;
    }
    toString() {
        return `Product(${this.id}): ${this.name} | ₹${this._price} | stock:${this._stock}`;
    }
}
__decorate([
    LogChange
], Product.prototype, "setPrice", null);
__decorate([
    LogChange
], Product.prototype, "setStock", null);
// Storage: Map keyed by id
class ProductManager {
    constructor() { this.products = new Map(); }
    add(p) {
        if (this.products.has(p.id))
            throw new Error('Product id exists');
        this.products.set(p.id, p);
    }
    update(id, patch) {
        const p = this.products.get(id);
        if (!p)
            throw new Error('Not found');
        if (patch.price !== undefined)
            p.setPrice(patch.price);
        if (patch.stock !== undefined)
            p.setStock(patch.stock);
        if (patch.name !== undefined)
            p.name = patch.name;
        if (patch.category !== undefined)
            p.category = patch.category;
    }
    delete(id) {
        return this.products.delete(id);
    }
    // iterate and return array
    list() {
        const out = [];
        for (const prod of this.products.values())
            out.push(prod);
        return out;
    }
}
// Example usage
const pm = new ProductManager();
pm.add(new Product(1, 'Wireless Headphones', 'Electronics', 2499, 10));
pm.add(new Product(2, 'Denim Jacket', 'Clothing', 1799, 5));
console.log('Initial list:');
for (const p of pm.list())
    console.log(p.toString());
console.log('\nUpdating price & stock (decorator will log):');
pm.update(1, { price: 2299, stock: 8 });
console.log('\nAfter update:');
for (const p of pm.list())
    console.log(p.toString());
