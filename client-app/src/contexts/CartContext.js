import React, { createContext, useState, useEffect } from "react";
// Universal Cookies import
import Cookies from "universal-cookie";
// Creem context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // State-ul cartului, array
  const [cart, setCart] = useState([]);
  // State-ul itemelor
  const [itemAmount, setItemAmount] = useState(0);
  // Pretul total
  const [total, setTotal] = useState(0);
  // Cookies
  const cookies = new Cookies();

  // Adaugam produsele din cart in cookies
  useEffect(() => {
    const cartData = cookies.get("cartCookie");
    if (cartData) {
      setCart(cartData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(total);
    cookies.set("cartCookie", cart, { path: "/" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // Adaugam in cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // Verificam daca acelasi produs e in cart de doua ori
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // Verificam daca avem cart items
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Stergem produsele din cos
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // Stergem toate produsele din cos
  const clearCart = () => {
    setCart([]);
  };

  // Crestem numarul de produse din cos
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // Scadem numarul de produse din cos
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
