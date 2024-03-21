export interface Product {
    id?: number; // Optional for when creating a new product that doesn't yet have an ID
    name: string;
    description: string;
    category: string;
    price: number;
  }