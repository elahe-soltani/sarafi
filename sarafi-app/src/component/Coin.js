import React from 'react';
//styles
import styles from './Coin.module.css';
const Coin = ({name,image,symbol,price,marketcap,priceChange}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="coin" />
            <span>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span>${price.toLocaleString()}</span>
            <span className={priceChange> 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)}%</span>
            <span>${marketcap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;