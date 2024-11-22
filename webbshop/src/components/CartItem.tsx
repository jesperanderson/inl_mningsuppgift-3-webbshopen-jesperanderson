import React from "react";
import {CartItem} from "../types";

interface CartItemProps {
    item: CartItem;
    removeFromCart: (productid: number) => void;
    updateQuantity: (productid: number, amount: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({item, removeFromCart, updateQuantity}) => {

    return (
    <div className="cart-item-container">
        <img className="cart-image" src={`/images/${item.image}`} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Pris: {item.price}kr</p>
        <p>Antal: {item.quantity}</p>
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
    </div>
    );
};

export default CartItemComponent;