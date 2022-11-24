import React, { useContext, useReducer, createContext } from 'react';
import { initialState, CartReducer } from '../state/CartReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const syncCartStorage = async state => {
    try {
      const jsonValue = JSON.stringify(state);
      await AsyncStorage.setItem('@cart', jsonValue);
    } catch (e) {
      console.log(e);
      throw new Error('unable to sync cart with async storage');
    }
  };

  const addToCart = async (id, price) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item_id: id,
        price: price,
      },
    });

    await syncCartStorage(state);
  };

  const removeFromCart = async (id, price) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        item_id: id,
        price: price,
      },
    });

    await syncCartStorage(state);
  };

  const clearCart = async () => {
    dispatch({
      type: 'CLEAR_CART',
    });

    await syncCartStorage(null);
  };

  const values = {
    items: state.items,
    totalAmount: state.totalAmount,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default useCart = () => {
  const context = useContext(CartContext);

  if (context == undefined) throw new Error('Call me inside CartProvider');

  return context;
};
