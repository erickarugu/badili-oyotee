import React, { useState } from "react";
import { IProduct } from "../../api/data";
import Cards from "./cards";
import Search from "./search/search";
import Sort from "./sort";
import { ImageListWrapper } from "./__styled__";

interface IImageListProps {
  loading: boolean;
  products: IProduct[];
  activeProduct: IProduct | null;
  setActiveProduct: (input: any) => void;
  setFavs: (input: any) => void;
  setCart: (input: any) => void;
  cart: number[];
  favs: number[];
}

const ImageList: React.FC<IImageListProps> = ({
  loading,
  products,
  activeProduct,
  setActiveProduct,
  cart,
  favs,
  setCart,
  setFavs,
}) => {
  const [searchStr, setSearchStr] = useState<string>("");

  return (
    <ImageListWrapper className="w-100 px-4 py-3">
      {/* {products.map((prod: IProduct) => prod.name)} */}
      <Search searchStr={searchStr} setSearchStr={setSearchStr} />
      {!!searchStr.length && (
        <p className="search-str my-2">
          Search result for <span>"{searchStr}"</span>
        </p>
      )}
      <Sort />
      <Cards
        setActiveProduct={setActiveProduct}
        activeProduct={activeProduct}
        products={products}
        loading={loading}
        setCart={setCart}
        setFavs={setFavs}
        cart={cart}
        favs={favs}
      />
    </ImageListWrapper>
  );
};

export { ImageList };
