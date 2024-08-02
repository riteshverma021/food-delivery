import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { food_list, cartItems, remove } = useContext(StoreContext);

  // Calculate subtotal
  const subtotal = Object.entries(cartItems).reduce((sum, [itemId, quantity]) => {
    const item = food_list[itemId];
    return sum + item.price * quantity;
  }, 0);

  // Delivery fee
  const deliveryFee = 2;

  // Total
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Object.entries(cartItems).map(([itemId, quantity]) => {
          const item = food_list[itemId];
          if (quantity > 0) {
            return (
              <div key={itemId} className='cart-item-container'>
                <div className='cart-item'>
                  <p><img src={item.image} alt={item.name} className='cart-item-image' /></p>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{quantity}</p>
                  <p>${(item.price * quantity).toFixed(2)}</p>
                  <p>
                    <button onClick={() => remove(itemId)}>X</button>
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className='cart-total'>
          <h2>Cart Totals</h2>
        </div>
        <div>
          <div className="total-details">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr />
          <div className="total-details">
            <p>Delivery fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <hr />
          <div className="total-details">
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>
        </div>
        <button>Proceed to checkout</button>
      </div>
      <div className='promocode'>
        <div>
          <p>If you have a promocode, enter it here.</p>
          <div className='promocode-input'>
            <input type="text" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
