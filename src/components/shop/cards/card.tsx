import React, { useState } from "react";
import { IProduct } from "../../../api/data";
import { CardWrapper } from "./__styled__";

interface ICardProps {
  product: IProduct;
  activeProduct: IProduct | null;
  setActiveProduct: (input: any) => void;
}
const Card: React.FC<ICardProps> = ({
  activeProduct,
  product,
  setActiveProduct,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleHeartClick = () => setClicked(!clicked);
  return (
    <CardWrapper
      className={`me-2 ${product.id === activeProduct?.id ? "active" : ""}`}
      onClick={() => setActiveProduct(product)}
    >
      <div className="image text-center">
        <img
          src={product.images?.[0]?.url}
          className="d-inline-block align-top mt-3"
          alt="Oyotee Logo"
        />
        <span
          className={`close-icon d-flex justify-content-center align-items-center ${
            clicked ? "clicked" : ""
          }`}
          onClick={handleHeartClick}
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-heart outline-danger"></i>
        </span>
      </div>
    </CardWrapper>
  );
};

export default Card;
