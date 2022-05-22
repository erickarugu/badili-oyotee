import React from "react";
import Skeleton from "react-loading-skeleton";
import { IProduct } from "../../../api/data";
import Card from "./card";
import { CardsWrapper } from "./__styled__";

interface ICardsProps {
  products: IProduct[];
  activeProduct: IProduct | null;
  setActiveProduct: (input: any) => void;
  loading: boolean;
  setFavs: (input: any) => void;
  setCart: (input: any) => void;
  cart: number[];
  favs: number[];
}
const Cards: React.FC<ICardsProps> = ({
  products,
  activeProduct,
  setActiveProduct,
  loading,
  cart,
  favs,
  setCart,
  setFavs,
}) => {
  return (
    <CardsWrapper className="d-flex justify-content-between flex-wrap">
      {!loading && !products.length && (
        <div className="no-prods border border-warning my-4 d-flex flex-column align-items-center justify-content-center w-100 h-100">
          <span className="icon text-white my-3 d-flex justify-content-center align-items-center">
            <i className="fa fa-exclamation"></i>
          </span>
          <h4>Sorry, No products Found</h4>
        </div>
      )}
      {loading
        ? [1, 2, 3, 4, 5].map((el: number) => (
            <div
              key={`skel-${el}`}
              className="skel px-2 py-2 border col-md-4 col-12 me-3 my-2"
            >
              <Skeleton count={7.5} className="my-2" />
            </div>
          ))
        : products.map((product: IProduct) => (
            <Card
              setActiveProduct={setActiveProduct}
              activeProduct={activeProduct}
              product={product}
              setCart={setCart}
              setFavs={setFavs}
              cart={cart}
              favs={favs}
            />
          ))}
    </CardsWrapper>
  );
};

export default Cards;
