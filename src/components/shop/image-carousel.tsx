import React, { useEffect, useState } from "react";
import { ImageCarouselWrapper } from "./__styled__";
import plant from "./../../dist/images/plant_1.png";
import { IImage, IProduct } from "../../api/data";

interface IImageCarouselProps {
  activeProduct: IProduct | null;
  setActiveProduct: (input: any) => void;
}
const ImageCarousel: React.FC<IImageCarouselProps> = ({
  activeProduct,
  setActiveProduct,
}) => {
  const [activeImage, setActiveImage] = useState<IImage>({});

  useEffect(() => {
    setActiveImage(activeProduct?.images[0] ?? {});
  }, [activeProduct]);

  const handleImageClick = (img: IImage) => {
    setActiveImage(img);
  };
  const handleCloseClick = () => setActiveProduct(null);

  if (!activeProduct) return null;
  return (
    <ImageCarouselWrapper className="px-3">
      <div className="active-image text-center">
        <img
          src={activeImage?.url}
          className="d-inline-block align-top mt-3"
          alt="Oyotee Logo"
        />
        <span
          className="close-icon d-flex justify-content-center align-items-center"
          onClick={handleCloseClick}
          style={{ cursor: "pointer" }}
        >
          X
        </span>
      </div>
      <div className="carousel my-2 d-flex align-items-center">
        {activeProduct.images.map((img: IImage) => (
          <span
            key={`img-${img.id}`}
            className={`carousel__image d-flex align-items-center justify-content-center mx-2 ${
              img.id === activeImage?.id ? "active" : ""
            }`}
            onClick={() => handleImageClick(img)}
          >
            <img
              src={img.url}
              width="50"
              className="d-inline-block align-top"
              alt="Oyotee Logo"
            />
          </span>
        ))}

        <span className="carousel__image d-flex align-items-center justify-content-center mx-2 more">
          <img
            src={plant}
            width="50"
            className="d-inline-block align-top"
            alt="Oyotee Logo"
          />
          <span className="counter text-white">+5</span>
        </span>
      </div>
      <h4 className="my-2">{activeProduct.name}</h4>
      <p>
        {activeProduct.details?.description}
        <span className="font-weight-bold">Read More</span>
      </p>
      <div className="tabs d-flex">
        <div className="col tab py-2 mx-2 text-center active">Details</div>
        <div className="col tab py-2 mx-2 text-center">Reviews(32)</div>
      </div>
    </ImageCarouselWrapper>
  );
};

export { ImageCarousel };
