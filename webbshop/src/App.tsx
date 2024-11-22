import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import productsData from "./products.json";
import { Product, CartItem } from "./types";
import './App.css'; 

const App: React.FC = () => {
  const [products] = useState<Product[]>(productsData);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Lägger till produkter i varukorgen
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // Ökar antalet eller minskar antalet
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== productId)
    );
  };
  // Lägg till / öka antalet
  const updateQuantity = (productId: number, amount: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + amount } : item
      ).filter(item => item.quantity > 0)
    );
  };
  // Ta bort / minska antalet
  const filteredProducts = products.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Här uppdateras äntalet för kundkorgen
  return (
    <div className="main-container">
      <h1>Köp Tv-Serier</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <main>
      <section><ProductList products={filteredProducts} addToCart={addToCart} /></section>
      <aside><Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} /></aside>
      </main>
    </div>
  );
};

export default App;
