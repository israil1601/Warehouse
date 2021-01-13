import axios from "axios";
import { BASE_URL, CATEGORIES } from "../constants";
import {
  AvailabilityResponse,
  FetchAvailabilities,
  FetchProducts,
} from "../types";
import { getStockValue } from "../utils";

const fetchProducts: FetchProducts = () => {
  return Promise.all(
    CATEGORIES.map((category) =>
      axios
        .get(`${BASE_URL}products/${category}`)
        .then(({ data }) => data)
        .catch((err) => {
          console.log(`${category} error`, err);
          return [];
        })
    )
  );
};

const fetchWithRetry = async (url: string, retryCount: number) => {
  let error;
  for (let i = 0; i < retryCount; i++) {
    try {
      return await axios
        .get(url)
        .then(({ data }) => data.response)
        .then((response: AvailabilityResponse[]) =>
          response.map(
            ({ id, DATAPAYLOAD }: AvailabilityResponse) => ({
              id,
              availability: getStockValue(DATAPAYLOAD),
            })
          )
        );
    } catch (err) {
      error = err;
    }
  }
  throw error;
};

const fetchAvailabilities: FetchAvailabilities = (manufacturers: string[]) => {
  return Promise.all(
    manufacturers.map((manufacturer) =>
      fetchWithRetry(`${BASE_URL}availability/${manufacturer}`, 5).catch(
        (err) => {
          console.log(`Error fetching manufacturer ${manufacturer}`);
          return [];
        }
      )
    )
  );
};

export { fetchProducts, fetchAvailabilities };
