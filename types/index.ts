export interface ProductInfo  {
  id: string;
  type: string;
  name: string;
  color: string[];
  price: number;
  manufacturer: string;
};

export type FetchProducts = () => Promise<ProductInfo[][]>;

export interface AvailabilityResponse {
  id: string;
  DATAPAYLOAD: string;
};


export interface Availability  {
  id: string;
  availability: string;
};

export type FetchAvailabilities = (manufacturers: string[]) => Promise<Availability[][]>;


// for better performance, availability response formatted as {[id]: [avaialability]}
export interface AvailabilityInfo {
  [id: string]: string;
};

export type Product = ProductInfo & Availability
