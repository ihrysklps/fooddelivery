import React from 'react';

function BlueBox({ onViewMenuClick }) {
  return (
    <section className="bluebox">
      <div className="bluebox-content">
        <h1>Order your favorite<br />food here</h1>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className="view-menu-btn" onClick={onViewMenuClick}>View Menu</button>
      </div>
      <div className="bluebox-image">
        <img src="/images/food_1.png" alt="Food Preview" />
      </div>
    </section>
  );
}

export default BlueBox; 