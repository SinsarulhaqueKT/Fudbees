import {createContext, useState,useContext} from 'react';

export const CartContext = createContext();

const {Datas, Downdata, greenFlatlist, Seconddowndata} = require('./Data');

const allProducts = [
  ...Datas,
  ...Downdata,
  ...greenFlatlist,
  ...Seconddowndata,
];

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = productId => {
    const productToAdd = allProducts.find(product => product.id === productId);

    if (productToAdd) {
      const existingItem = cartItems.find(item => item.id === productId);
      if (existingItem) {
        setCartItems(prevCartItems =>
          prevCartItems.map(item =>
            item.id === productId
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        );
      } else {
        setCartItems(prevCartItems => [
          ...prevCartItems,
          {...productToAdd, quantity: 1},
        ]);
      }
    }
  };
  const decreaseQuantity = productId => {
    setCartItems(
      prevCartItems =>
        prevCartItems
          .map(item =>
            item.id === productId
              ? {...item, quantity: Math.max(item.quantity - 1, 0)}
              : item,
          )
          .filter(item => item.quantity > 0), // Remove items with quantity 0
    );
  };
  const totalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, decreaseQuantity, totalAmount}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
