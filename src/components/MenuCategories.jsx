import React from 'react';

const categories = [
  { name: 'Salad', img: '/images/food_1.png' },
  { name: 'Rolls', img: '/images/food_2.png' },
  { name: 'Desserts', img: '/images/food_3.png' },
  { name: 'Sandwich', img: '/images/food_4.png' },
  { name: 'Cake', img: '/images/food_5.png' },
  { name: 'Pure Veg', img: '/images/food_6.png' },
  { name: 'Pasta', img: '/images/food_7.png' },
  { name: 'Noodles', img: '/images/food_8.png' },
];

function MenuCategories() {
  return (
    <section className="menu-categories">
      <h2>Explore our menu</h2>
      <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="categories-row">
        {categories.map((cat, idx) => (
          <div className="category-item" key={idx}>
            <img src={cat.img} alt={cat.name} className="category-img" />
            <span className="category-label">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuCategories; 