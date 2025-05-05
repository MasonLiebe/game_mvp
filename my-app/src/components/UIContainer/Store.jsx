import React from 'react';
import styles from './UIContainer.module.css';

const Store = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Store</h2>
      <div className={styles.content}>
        <p>Store items will be displayed here</p>
      </div>
    </div>
  );
};

export default Store; 