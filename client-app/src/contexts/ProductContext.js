import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// Creem context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // State-ul produselor, array
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
