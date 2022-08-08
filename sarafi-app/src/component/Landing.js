import React, {useEffect , useState} from 'react';
//api
import { getCoin } from '../services/api';
//style
import styles from './Landing.module.css';
//component
import Coin from './Coin.js'
import Loder from './Loder';

const Landing = () => {
    const [coins , setCoins] = useState ([]);
    const [search , setSearch]=useState ("");
    useEffect (() =>{
        const fetchAPI= async () => {
            const data=await getCoin();
            setCoins(data);           
        }

        fetchAPI();
    },[])

    const searchHandeler = event => {
        setSearch (event.target.value);
    }
    
    const searchCoins=coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
       <>
       <div className={styles.container}>
       <input type="text" placeholder='Search' value={search} onChange={searchHandeler} />
       {
        coins.length ?
         <div>
            {
            searchCoins.map(coin => <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketcap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}      
                 /> )
            }           
         </div> :
            <Loder />
       }
         </div>
       </>
    );
};

export default Landing;