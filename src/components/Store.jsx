import SampleProducts from "../sampleServerData/SampleProducts";
import SortOptions from "../sampleServerData/SortOptions";
import Categories from "../sampleServerData/Categories";
import ProductCard from "./Productcard";
import { useState } from "react";
import DarkScreen from "./DarkScreen";

export default function Store() {
  //sidebar for filter and sort when they merge together in a small screen
  let [showSideBar, setShowSideBar] = useState(false);

  let [products, setProducts] = useState(SampleProducts);

  //Filter products displayed in store page based on the selected category
  const filterProducts = (event) => {
    let selectedCategory = event.target.value;

    setProducts(
      SampleProducts.filter((product) => {
        return selectedCategory === "all"
          ? true
          : product.category === selectedCategory;
      })
    );
  };

  //Sort products displayed in store page based on the selected sort option
  const sortProducts = (event) => {
    let selectedOption = event.target.value;
    let sortedProducts = [...products]; //initial value only no hidden meaning

    switch (selectedOption) {
      case "a-z":
        // Sort by name alphabetically A-Z
        sortedProducts = sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "z-a":
        // Sort by name alphabetically Z-A
        sortedProducts = sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
      case "high-low":
        // Sort by price high to low
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "low-high":
        // Sort by price low to high
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        console.error("Invalid sorting option");
    }
    setProducts(sortedProducts);
  };

  return (
    <main>
      {!showSideBar || (
        <DarkScreen />
      )}

      <div className="px-4 py-14 text-primary md:px-0 md--primary-container">
        <h1 className="mb-16 text-4xl font-semibold text-primary">Shop All</h1>
        <section>
          <div className="flex items-center justify-between mb-8 cursor-pointer">
            <div
              onClick={() => {
                setShowSideBar(!showSideBar);
              }}
              className="flex gap-2 md:hidden"
            >
              <span className="text-lg material-symbols-outlined">
                page_info
              </span>
              <span>Filter and Sort</span>
            </div>

            <div
              className={`${
                showSideBar ? "flex" : "hidden"
              } fixed bottom-0 right-0 flex-col gap-6 p-10 bg-white top-24 h-full
              md:justify-between md:p-0 md:flex-row md:flex-1  md:bg-transparent md:flex md:static`}
            >
              {!showSideBar || (
                <div
                  onClick={() => {
                    setShowSideBar(!showSideBar);
                  }}
                  className="absolute top-3 right-6"
                >
                  <span className="material-symbols-outlined">close</span>
                </div>
              )}
              <div>
                <label htmlFor="storeProductCategory" className="mr-4">
                  Filter:
                </label>
                <select className="bg-transparent" id="storeProductCategory" onChange={filterProducts}>
                  {Categories.map((category) => (
                    <option key={category.id} value={category.value}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:ml-auto">
                <label htmlFor="storeProductSort" className="mr-4">
                  Sort by:
                </label>
                <select className="bg-transparent" id="storeProductSort" onChange={sortProducts}>
                  {SortOptions.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="ml-8">
              <span>
                <span>{products.length}</span> products
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-2 3xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                category={product.category}
                name={product.name}
                price={product.price}
                img={product.img}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
