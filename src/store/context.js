import React from 'react';
import {createContext,useState,useEffect} from 'react';
import constants from '../constants';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect( () => {
        setLoading(true);
        axios.get(constants.url)
        .then(response => {
           setProducts(response.data);
        })
        .catch(err => console.log(err));
        return setLoading(false);
    },[products,cart]);
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
   return (
       <AppContext.Provider value={{products,setProducts,cart,setCart,removeItem,loading}}>
        {children}
       </AppContext.Provider>
   )
}

export {
    AppContext,
    AppContextProvider
}