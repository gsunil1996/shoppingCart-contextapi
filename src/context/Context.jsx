import React from 'react';
import { createContext } from 'react';
import faker from "faker";
import { useReducer } from 'react';
import { cartReducer, filterReducer } from './Reducers';

export const CartContext = createContext();

faker.seed(100);

const Context = ({ children }) => {
    
    const products = [...Array(20)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));

    // console.log(products);

    const initialState = {
        products: products,
        cart: []
  }
  
  const filterInitialState = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ""
  }

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [filterState, filterDispatch] = useReducer(filterReducer, filterInitialState);

  return (
    <CartContext.Provider value={{ state, dispatch, filterState, filterDispatch }} >
        {children}
    </CartContext.Provider>
  )
}

export default Context;