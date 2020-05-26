import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaders_container}>
      <div className={styles.circle}></div>
    </div>
  );
};

export default Loader;