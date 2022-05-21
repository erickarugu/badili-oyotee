import React from "react";
import { IProduct } from "../../../api/data";
import Card from "./card";
import { CardsWrapper } from "./__styled__";

interface ICardsProps {
  products: IProduct[];
  activeProduct: IProduct | null;
  setActiveProduct: (input: any) => void;
}
const Cards: React.FC<ICardsProps> = ({
  products,
  activeProduct,
  setActiveProduct,
}) => {
  return (
    <CardsWrapper className="d-flex justify-content-between flex-wrap">
      {products.map((product: IProduct) => (
        <Card
          setActiveProduct={setActiveProduct}
          activeProduct={activeProduct}
          product={product}
        />
      ))}
    </CardsWrapper>
  );
};

export default Cards;
