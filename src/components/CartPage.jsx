import React, { useState } from 'react';
import { useCart } from './CartContext';
import './CartPage.css';

function CartPage() {
  const { cart, updateItem, getSubtotal } = useCart();
  const [promo, setPromo] = useState('');
  const deliveryFee = 20;
  const subtotal = getSubtotal();
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-page">
      <h2 className="cart-title">Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr><td colSpan="6" style={{textAlign:'center'}}>No items in cart.</td></tr>
          ) : cart.map(({ item, quantity }, idx) => (
            <tr key={item.name}>
              <td><img src={item.img} alt={item.name} className="cart-item-img" /></td>
              <td>{item.name}</td>
              <td>{item.price.replace('₹','')}</td>
              <td>{quantity}</td>
              <td>{parseInt(item.price.replace(/[^0-9]/g, '')) * quantity}</td>
              <td>
                <div className="menu-qty-counter">
                  <button className="qty-btn minus" onClick={() => updateItem(item, Math.max(0, quantity-1))}>-</button>
                  <span className="qty-value">{quantity}</span>
                  <button className="qty-btn plus" onClick={() => updateItem(item, Math.min(10, quantity+1))}>+</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-bottom-row">
        <div className="cart-totals">
          <h3>Cart Totals</h3>
          <div className="cart-total-row"><span>Subtotal</span><span>{subtotal}</span></div>
          <div className="cart-total-row"><span>Delivery Fee</span><span>{deliveryFee}</span></div>
          <div className="cart-total-row cart-total-main"><span>Total</span><span>{total}</span></div>
          <button className="cart-checkout-btn">Proceed to Checkout</button>
        </div>
        <div className="cart-promo">
          <label>If you have a promo code, Enter it here</label>
          <div className="cart-promo-row">
            <input type="text" value={promo} onChange={e => setPromo(e.target.value)} placeholder="Enter promo code" />
            <button className="cart-apply-btn">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage; 