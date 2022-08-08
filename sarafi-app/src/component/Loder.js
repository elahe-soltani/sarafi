import React from 'react';
import styles from './Loder.module.css';
const Loder = () => {
    return (
        <div className={styles.container}>
            <span className={styles.loader}></span>
        </div>
    );
};

export default Loder;