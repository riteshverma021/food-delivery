
import React, { useEffect, createContext, useState } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const add = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const remove = (itemId) => {
        setCartItems((prev) => {
            const newCount = prev[itemId] - 1;
            if (newCount <= 0) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [itemId]: newCount };
        });
    };
    const getTotalAmount=()=>{
      let totalAmount = 0;
      for(const item in cartItems){
        if(cartItems[item>0]){
          let itemInfo = food_list.find((product)=>product._id === item);
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
      return totalAmount;
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        add,
        remove,
        cartItems,getTotalAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
