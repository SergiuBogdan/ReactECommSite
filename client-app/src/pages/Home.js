import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByPrice, setSortByPrice] = useState(null);

  // Filtram produsele dupa titlu
  const filteredProducts = products.filter((product) => {
    // Textul din searchbar il facem lowercase, chiar daca scriem cu litere mari sau mici, filtrarea functioneaza
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const lowerCaseCategory = product.category.toLowerCase();

    // Verifica daca titlul include ce tastam in searchbar
    return lowerCaseCategory.includes(lowerCaseSearchQuery);
  });

  // Sortam produsele in ordine crescatoare sau descrescatoare, a pretului
  const sortedProducts = sortByPrice
    ? filteredProducts
        .slice()
        .sort((a, b) =>
          sortByPrice === "asc" ? a.price - b.price : b.price - a.price
        )
    : filteredProducts;

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex justify-between items-center mb-4">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <div className="flex gap-4">
              <button
                onClick={() => setSortByPrice("asc")}
                className={`px-4 py-2 rounded-md ${
                  sortByPrice === "asc"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                Ascending Price
              </button>
              <button
                onClick={() => setSortByPrice("desc")}
                className={`px-4 py-2 rounded-md ${
                  sortByPrice === "desc"
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                Descending Price
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
            {sortedProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
