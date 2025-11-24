import React from "react";
import ProductCard from "../components/ProductCard";
import "./ShopNow.css";

const PRODUCTS = [
  { id: 1, title: "Wireless Earbuds", price: 1499, discount: 300 },
  { id: 2, title: "Smart Watch", price: 3999, discount: 500 },
  { id: 3, title: "Bluetooth Speaker", price: 2299, discount: 199 },
  { id: 4, title: "Portable Charger", price: 999, discount: 150 }
];

const ShopNow = () => {
  return (
    <main className="shop-container">
      <h1 className="shop-title">ShopNow — Products</h1>

      <section className="products-grid" aria-label="products list">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} title={p.title} price={p.price} discount={p.discount} />
        ))}
      </section>
    </main>
  );
};

export default ShopNow;
