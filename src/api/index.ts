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
  query?: string;
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
    if (input.rating && product.rating < input.rating) {
      return false;
    }
    if (input.minPrice && product.price < input?.minPrice) {
      return false;
    }
    if (input.maxPrice && product.price > input?.maxPrice) {
      return false;
    }
    if (
      input.query &&
      !product.name.toLowerCase().includes(input.query.toLowerCase())
    ) {
      return false;
    }
    if (
      input?.categoryIds?.length &&
      !input.categoryIds.includes(product.categoryId)
    ) {
      return false;
    }
    return status;
  });
};

export {};
