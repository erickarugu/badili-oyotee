import React from "react";
import { IProduct } from "../../../api/data";
import { StarRating } from "../../common";
import { CardWrapper } from "./__styled__";

interface ICardProps {
  product: IProduct;
  activeProduct: IProduct | null;
  setActiveProduct: (input: any) => void;
  setFavs: (input: any) => void;
  setCart: (input: any) => void;
  cart: number[];
  favs: number[];
}
const Card: React.FC<ICardProps> = ({
  activeProduct,
  product,
  setActiveProduct,
  cart,
  favs,
  setCart,
  setFavs,
}) => {
  const handleHeartClick = (e: React.SyntheticEvent, id: number) => {
    e.stopPropagation();
    if (favs.includes(id)) {
      const temp: number[] = favs.filter((fav: number) => id !== fav);
      setFavs(temp);
    } else {
      setFavs((prevState: number[]) => [...prevState, id]);
    }
  };
  const handleCartClick = (e: React.SyntheticEvent, id: number) => {
    e.stopPropagation();
    if (cart.includes(id)) {
      const temp: number[] = cart.filter((fav: number) => id !== fav);
      setCart(temp);
    } else {
      setCart((prevState: number[]) => [...prevState, id]);
    }
  };
  return (
    <CardWrapper
      className={`me-2 p-3 my-2 ${
        product.id === activeProduct?.id ? "active" : ""
      }`}
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
            favs.includes(product.id) ? "clicked" : ""
          }`}
          onClick={(e) => handleHeartClick(e, product.id)}
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-heart outline-danger"></i>
        </span>
      </div>
      <h5 className="my-2 mt-auto">{product.name}</h5>

      <div className="d-flex">
        <StarRating rating={product.rating} />
        <span className="">({product.reviews.length})</span>
      </div>

      <div className="cart d-flex justify-content-between">
        <div>
          <p className="my-0">Price</p>
          <p className="my-0">${product.price}</p>
        </div>
        <button
          className={`btn py-2 custom ${
            cart.includes(product.id) ? "added" : ""
          }`}
          onClick={(e) => handleCartClick(e, product.id)}
        >
          {cart.includes(product.id) ? "Remove" : "Add to cart"}
        </button>
      </div>
    </CardWrapper>
  );
};

export default Card;
