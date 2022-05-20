import { categories, ICategory, IProduct, products } from "./data";

enum DateOrder {
  DESC = "desc",
  ASC = "asc",
}
export interface IFilterProducts {
  rating?: number;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: number;
}

interface ISortProducts {
  relevance?: boolean;
  date?: DateOrder;
}
export const fetchCategories = (): ICategory[] => {
  return categories;
};

export const fetchProducts = () => {
  setTimeout(() => {
    return products;
  }, 3000);
};

export const filterProducts = (input: IFilterProducts) => {
  setTimeout(() => {
    const arr: IProduct[] = products;
    return arr.filter((product: IProduct) => {
      let status = false;
      if (input.rating) {
        product.rating > input.rating ? (status = true) : (status = false);
      } else if (input.minPrice) {
        product.price > input?.minPrice ? (status = true) : (status = false);
      } else if (input.maxPrice) {
        product.price < input?.maxPrice ? (status = true) : (status = false);
      } else if (input.categoryId) {
        product.categoryId === input?.categoryId
          ? (status = true)
          : (status = false);
      }
      return status;
    });
  }, 3000);
};

export {};
