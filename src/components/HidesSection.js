import React from 'react';

const hides = [
  {
    name: 'A-Grade Superior',
    price: 'R4500',
    image: 'https://urbannguni.net/cdn/shop/files/489159DC-2953-4E05-9C44-305196CEE29E_1024x1024@2x.jpg?v=1718799530',
  },
  {
    name: 'A-Grade',
    price: 'R3800',
    image: 'https://jnleathercompany.com/wp-content/uploads/2021/09/DU161.jpeg',
  },
  {
    name: 'B-Grade',
    price: 'R3500',
    image: 'https://www.afritan.com/images/products/AAS5893.jpg',
  },
];

const HidesSection = () => {
  return (
    <section className="hides-section">
      <h2>Our Hides Collection</h2>
      <div className="hides-list">
        {hides.map((hide, index) => (
          <div key={index} className="hide-item">
            <img src={hide.image} alt={hide.name} className="hide-image" />
            <h3>{hide.name}</h3>
            <p>Price: {hide.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HidesSection;
