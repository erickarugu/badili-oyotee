import { v4 as uuidv4 } from "uuid";

export interface ICategory {
  id: number;
  name: string;
}
export interface IProductDetails {
  height: number;
  width: number;
  description: string;
}
export interface IProductReviews {
  name: string;
  review: string;
}
export interface IProduct {
  id: number;
  name: string;
  price: number;
  currency: string;
  categoryId: number;
  rating: number;
  likes: number;
  createdAt: Date;
  images: string[];
  relevance: number;
  details?: IProductDetails;
  reviews: IProductReviews[];
}
export const categories: ICategory[] = [
  {
    id: 1,
    name: "Gardening",
  },
  {
    id: 2,
    name: "Plants",
  },
  {
    id: 3,
    name: "Seeds",
  },
  {
    id: 4,
    name: "Bulbs",
  },
  {
    id: 5,
    name: "Planters",
  },
  {
    id: 6,
    name: "Flowers",
  },
  {
    id: 7,
    name: "Stems",
  },
  {
    id: 8,
    name: "Lillies",
  },
];

export const products: IProduct[] = [
  {
    id: 11,
    name: "Monstera DK Var (L)",
    categoryId: 1,
    price: 325,
    currency: "EURO",
    rating: 4,
    likes: 0,
    createdAt: new Date(),
    images: [],
    relevance: 1,
    details: {
      height: 120,
      width: 50,
      description: "Anima Save",
    },
    reviews: [
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
    ],
  },
  {
    id: 13,
    name: "Monstera DK Var (L)",
    categoryId: 1,
    price: 325,
    currency: "EURO",
    rating: 4,
    likes: 0,
    createdAt: new Date(),
    images: [],
    relevance: 1,
    details: {
      height: 120,
      width: 50,
      description: "Anima Save",
    },
    reviews: [
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
    ],
  },
  {
    id: 14,
    name: "Monstera DK Var (L)",
    categoryId: 1,
    price: 325,
    currency: "EURO",
    rating: 4,
    likes: 0,
    createdAt: new Date(),
    images: [],
    relevance: 1,
    details: {
      height: 120,
      width: 50,
      description: "Anima Save",
    },
    reviews: [
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
    ],
  },
  {
    id: 15,
    name: "Monstera DK Var (L)",
    categoryId: 1,
    price: 325,
    currency: "EURO",
    rating: 4,
    likes: 0,
    createdAt: new Date(),
    images: [],
    relevance: 1,
    details: {
      height: 120,
      width: 50,
      description: "Anima Save",
    },
    reviews: [
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
    ],
  },
  {
    id: 16,
    name: "Monstera DK Var (L)",
    categoryId: 1,
    price: 325,
    currency: "EURO",
    rating: 4,
    likes: 0,
    createdAt: new Date(),
    images: [],
    relevance: 1,
    details: {
      height: 120,
      width: 50,
      description: "Anima Save",
    },
    reviews: [
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
      {
        name: "Eric Karugu",
        review: "THis is a good product",
      },
    ],
  },
];
