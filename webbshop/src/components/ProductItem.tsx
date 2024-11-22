import React, { useState } from "react";
import { Product } from "../types";

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    // Öppna / stänga modalen
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="product-container">
      <img src={`/images/${product.image}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Pris: {product.price}kr</p>
      <button onClick={() => addToCart(product)}>Lägg till i kundkorg</button>
      <button onClick={openModal}>Mer information</button>

      {isModalOpen && (
  <div className="modal" onClick={closeModal}>
    <div
      className="modal-content"
      onClick={(e) => {
        e.stopPropagation(); 
      }}
    >
      <button className="close-button" onClick={closeModal}>
        &times;
      </button>
      <h2>{product.name}</h2>
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        style={{ maxWidth: "100%", borderRadius: "8px" }}
      />
      <p>{product.description}</p>
      <p><strong>Pris:</strong> {product.price} kr</p>
    </div>
  </div>
)}


    </div>
  );
};

export default ProductItem;
