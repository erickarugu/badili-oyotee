import { categories, ICategory, IProduct, products } from "./data";

// enum DateOrder {
//   DESC = "desc",
//   ASC = "asc",
// }
export interface IFilterProducts {
  rating?: number;
  minPrice?: number;
  maxPrice?: number;
  categoryIds?: number[];
}

// interface ISortProducts {
//   relevance?: boolean;
//   date?: DateOrder;
// }
export const fetchCategories = (): ICategory[] => {
  return categories;
};

export const fetchProducts = () => {
  return products;
};

export const filterProducts = (input: IFilterProducts) => {
  const arr: IProduct[] = products;
  return arr.filter((product: IProduct) => {
    let status = true;
    if (input.rating) {
      product.rating > input.rating ? (status = true) : (status = false);
    } else if (input.minPrice) {
      product.price > input?.minPrice ? (status = true) : (status = false);
    } else if (input.maxPrice) {
      product.price < input?.maxPrice ? (status = true) : (status = false);
    } else if (input?.categoryIds?.length) {
      input.categoryIds.includes(product.categoryId)
        ? (status = true)
        : (status = false);
    }
    return status;
  });
};

export {};
