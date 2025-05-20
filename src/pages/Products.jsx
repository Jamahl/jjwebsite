import React from 'react';
import styles from '../styles/Products.module.css';

const categories = [
  { name: 'Necklaces', description: 'Elegant pieces for every occasion.' },
  { name: 'Bracelets', description: 'Modern bracelets to complement your style.' },
  { name: 'Rings', description: 'The perfect ring for any moment.' },
  { name: 'Custom', description: 'Unique piece tailored to you.' }
];

const Products = () => (
  <section className={styles.products}>
    <h2>Our Collections - PAGE UNDER CONSTRUCTION</h2>
    <div className={styles.categories}>
      {categories.map(cat => (
        <div key={cat.name} className={styles.categoryCard}>
          <h3>{cat.name}</h3>
          <p>{cat.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
