import React, { useState } from 'react';
import { useCart } from './CartContext';

const menuItems = [
  {
    name: 'Greek salad',
    img: '/images/food_1.png',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: '₹120',
    rating: '/images/rating_starts.png',
  },
  {
    name: 'Veg salad',
    img: '/images/food_2.png',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: '₹180',
    rating: '/images/rating_starts.png',
  },
  {
    name: 'Clover Salad',
    img: '/images/food_3.png',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: '₹160',
    rating: '/images/rating_starts.png',
  },
  {
    name: 'Chicken Salad',
    img: '/images/food_4.png',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: '₹240',
    rating: '/images/rating_starts.png',
  },
];

function FullMenu() {
  const [quantities, setQuantities] = useState(Array(menuItems.length).fill(0));
  const { updateItem } = useCart();

  const handleChange = (idx, delta) => {
    setQuantities(qty => {
      const newQty = [...qty];
      newQty[idx] = Math.max(0, Math.min(10, newQty[idx] + delta));
      updateItem(menuItems[idx], newQty[idx]);
      return newQty;
    });
  };

  return (
    <section className="full-menu">
      <div className="menu-grid">
        {menuItems.map((item, idx) => (
          <div className="menu-card" key={idx}>
            <div className="menu-card-img-wrap">
              <img src={item.img} alt={item.name} className="menu-card-img" />
              <div className="menu-qty-counter">
                <button className="qty-btn minus" onClick={() => handleChange(idx, -1)}>-</button>
                <span className="qty-value">{quantities[idx]}</span>
                <button className="qty-btn plus" onClick={() => handleChange(idx, 1)}>+</button>
              </div>
            </div>
            <div className="menu-card-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="menu-card-bottom">
                <span className="menu-card-price">{item.price}</span>
                <img src={item.rating} alt="Rating" className="menu-card-rating" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FullMenu; 