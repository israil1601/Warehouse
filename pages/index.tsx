import { GetStaticProps } from "next";
import { useState } from "react";
import NavBar from "../components/NavBar";
import ProductContainer from "../components/ProductContainer";
import Layout from "../components/Layout";
import { fetchAvailabilities, fetchProducts } from "../services";
import { AvailabilityInfo, Product } from "../types";
import {
  getAvailabilitiesObject,
  getProducts,
  getUniqueManufacturers,
  groupProductsByCategory,
} from "../utils";

export default function Home({ products, date }) {
  const categories = Object.keys(products);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  console.log(`Last updated: ${date}`);
  return (
    <Layout>
      <NavBar categories={categories} setCurrentCategory={setCurrentCategory} />
      <ProductContainer currentProducts={products[currentCategory]} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const productsInfo = (await fetchProducts()).flat();
  const manufacturers = getUniqueManufacturers(productsInfo);
  const availabilitiyList = (await fetchAvailabilities(manufacturers)).flat();
  const availabilities: AvailabilityInfo = getAvailabilitiesObject(
    availabilitiyList,
  );
  const productsList: Product[] = getProducts(productsInfo, availabilities);

  const products: { [category: string]: Product[] } = groupProductsByCategory(
    productsList,
  );
  return {
    props: {
      products,
      date: new Date().toJSON(),
    },
    revalidate: 20, // since internal cache is 5 minutes, data will be re-fetched every 300 seconds
  };
};
