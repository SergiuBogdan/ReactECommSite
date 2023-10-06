import React, { createContext, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// Creem context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // State-ul produselor, array
  const [products, setProducts] = useState([]);

  //React Query mode of fetching data.
  useQuery({
    queryKey: ["beers"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/api/activities");
      setProducts(response.data);
      return response.data;
    },
  });

  //old way of fetching data
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/activities").then((res) => {
  //     console.log(res.data);
  //     setProducts(res.data);
  //   });
  // }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
