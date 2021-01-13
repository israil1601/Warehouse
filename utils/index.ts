import { AvailabilityInfo, Availability, ProductInfo, Product } from "../types";

export const getStockValue = (inStockValue: string) =>
  inStockValue.match(/<INSTOCKVALUE>(.*)<\/INSTOCKVALUE>/)[1];

export const getUniqueManufacturers = (products: ProductInfo[]) => {
  return Array.from(
    new Map(products.map((product) => [product.manufacturer, product])).keys()
  );
};

export const getAvailabilitiesObject = (availabilitiesList: Availability[]) =>
  availabilitiesList.reduce((acc, { id, availability }) => {
    acc[id.toLowerCase()] = availability;
    return acc;
  }, {});

export const getProducts = (
  products: ProductInfo[],
  availabilities: AvailabilityInfo
) => {
  return products.map((product) => ({
    ...product,
    availability: availabilities[product.id],
  }));
};

export const groupByProperty = (
  list: { [key: string]: any }[],
  property: string
) =>
  list.reduce((acc, curr) => {
    const key = curr[property];
    const currentList = acc[key] || [];
    currentList.push(curr);
    acc[key] = currentList;
    return acc;
  }, {});

export const groupProductsByCategory = (products: Product[]) =>
  groupByProperty(products, "type");
