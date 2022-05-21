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
}

const ImageList: React.FC<IImageListProps> = ({
  loading,
  products,
  activeProduct,
  setActiveProduct,
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
      />
    </ImageListWrapper>
  );
};

export { ImageList };
