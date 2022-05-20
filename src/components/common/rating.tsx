import React from "react";
import { StarsWrapper } from "./__styled__";

interface IStarRatingProps {
  rating: number;
}
const StarRating: React.FC<IStarRatingProps> = ({ rating }) => {
  let stars: any[] = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars = [...stars, <span className="fa fa-star rated" key={i}></span>];
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars = [
        ...stars,
        <span className="fa fa-star-half-o rated" key={i}></span>,
      ];
    } else {
      stars = [
        ...stars,
        <span className="fa fa-star not-rated text-light-gray" key={i}></span>,
      ];
    }
  }

  return (
    <StarsWrapper className="rating-stars d-flex align-items-center justify-content-center">
      {stars}
    </StarsWrapper>
  );
};

export { StarRating };
