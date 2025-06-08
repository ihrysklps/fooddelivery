import React from 'react';

const topDishes = [
  {
    name: 'Greek salad',
    img: '/images/food_1.png',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: '₹120',
    rating: '/images/rating_starts.png',
  },
  {
    name: 'Clover Salad',
    img: '/images/food_2.png',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: '₹160',
    rating: '/images/rating_starts.png',
  },
  {
    name: 'Chicken Salad',
    img: '/images/food_3.png',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: '₹240',
    rating: '/images/rating_starts.png',
  },
];

function TopDishes() {
  return (
    <section className="top-dishes">
      <h2>Top dishes near you</h2>
      <div className="top-dishes-list">
        {topDishes.map((dish, idx) => (
          <div className="top-dish-card" key={idx}>
            <img src={dish.img} alt={dish.name} className="top-dish-img" />
            <div className="top-dish-info">
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <div className="top-dish-bottom">
                <span className="top-dish-price">{dish.price}</span>
                <img src={dish.rating} alt="Rating" className="top-dish-rating" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDishes; 