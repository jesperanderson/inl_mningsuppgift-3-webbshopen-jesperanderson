import React from 'react';
import { CartItem } from '../types';
import CartItemComponent from './CartItem';


// Detta ger en lista samt funktioner som tar bort artiklar och räknar ut kvantiteten
interface CartProps {
    cart: CartItem[];
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, amount: number) => void;
}
// Räknar ut totalpriset
const Cart: React.FC<CartProps> = ({cart, removeFromCart, updateQuantity}) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className='cart-container'>
      <h2>Kundkorg</h2>
      {cart.map(item => (
        <CartItemComponent
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}
      <p>Total: {total} kr</p>
    </div>
    );
};

export default Cart;