// Interface
interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

// Simple method decorator to log before and after
function LogChange(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`[LogChange] Calling ${propertyKey} with`, args);
    const result = original.apply(this, args);
    console.log(`[LogChange] New state of product:`, this.toString());
    return result;
  };
  return descriptor;
}
// Product class implementing IProduct
class Product implements IProduct {
  id: number;
  name: string;
  category: string;
  private _price: number;
  private _stock: number;

  constructor(id: number, name: string, category: string, price: number, stock: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this._price = price;
    this._stock = stock;
  }

  get price() { return this._price; }
  get stock() { return this._stock; }
// Methods to update price and stock with logging
  @LogChange
  setPrice(newPrice: number) {
    if (newPrice < 0) throw new Error('Price cannot be negative');
    this._price = newPrice;
  }

  @LogChange
  setStock(newStock: number) {
    if (!Number.isInteger(newStock) || newStock < 0) throw new Error('Stock must be a non-negative integer');
    this._stock = newStock;
  }

  toString() {
    return `Product(${this.id}): ${this.name} | ₹${this._price} | stock:${this._stock}`;
  }
}

// Storage: Map keyed by id
class ProductManager {
  products: Map<number, Product>;

  constructor() { this.products = new Map(); }

  add(p: Product) {
    if (this.products.has(p.id)) throw new Error('Product id exists');
    this.products.set(p.id, p);
  }

  update(id: number, patch: Partial<IProduct>) {
    const p = this.products.get(id);
    if (!p) throw new Error('Not found');
    if (patch.price !== undefined) p.setPrice(patch.price);
    if (patch.stock !== undefined) p.setStock(patch.stock);
    if (patch.name !== undefined) p.name = patch.name;
    if (patch.category !== undefined) p.category = patch.category;
  }

  delete(id: number) {
    return this.products.delete(id);
  }

  // iterate and return array
  list(): Product[] {
    const out: Product[] = [];
    for (const prod of this.products.values()) out.push(prod);
    return out;
  }
}

// Example usage
const pm = new ProductManager();
pm.add(new Product(1, 'Wireless Headphones','Electronics', 2499, 10));
pm.add(new Product(2, 'Denim Jacket','Clothing', 1799, 5));

console.log('Initial list:');
for (const p of pm.list()) console.log(p.toString());

console.log('\nUpdating price & stock (decorator will log):');
pm.update(1, { price: 2299, stock: 8 });

console.log('\nAfter update:');
for (const p of pm.list()) console.log(p.toString());
