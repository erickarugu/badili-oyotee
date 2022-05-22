import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { fetchCategories, IFilterProducts } from "../../api";
import { ICategory } from "../../api/data";
import { Button, StarRating } from "../common";
import { AdBanner, SideBarWrapper } from "./__styled__";

interface ISideBarProps {
  filters: IFilterProducts;
  updateValues: (input: any) => void;
}
interface IPrice {
  min?: number;
  max?: number;
}
const SideBar: React.FC<ISideBarProps> = ({ filters, updateValues }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<ICategory[]>();
  const [price, setPrice] = useState<IPrice>({});

  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      setTimeout(() => {
        const categories = fetchCategories();
        setCategories(categories);
        setLoading(false);
      }, 3000);
    };
    fetchData();
  }, []);

  return (
    <SideBarWrapper className="sidebar mb-4">
      <h5 className="pt-4 ms-5 font-weight-lighter">Filter</h5>
      <hr />
      <div className="categories ps-5">
        <h6 className="mb-2">Categories</h6>
        {loading
          ? [1, 2, 3, 4, 5, 6, 7].map((el: number) => (
              <div key={`skel-${el}`} className="my-3 me-5">
                <Skeleton borderRadius={"0.5rem"} />
              </div>
            ))
          : categories?.map((category: ICategory, idx: number) => (
              <div
                className="category d-flex align-items-center my-1"
                key={`cat-${idx}-${category.id}`}
              >
                <input
                  onChange={() => {
                    let temp: number[] = filters.categoryIds ?? [];
                    const id = category.id;
                    if (temp.includes(id)) {
                      temp = temp.filter((catId: number) => catId !== id);
                    } else {
                      temp = [...temp, id];
                    }
                    updateValues({
                      categoryIds: [...temp],
                    });
                  }}
                  type="checkbox"
                  id={`${idx}`}
                />
                <label htmlFor={`${idx}`} className="">
                  <span className="custom-checkbox"></span>
                  <span>{category.name}</span>
                </label>
              </div>
            ))}
      </div>
      <hr />
      <div className="price ps-5 pe-5 py-2">
        <h6 className="my-2">Price range</h6>
        <Row className="mb-2">
          <Col>
            <Form.Control
              value={price?.min}
              type="number"
              placeholder="Min"
              onChange={(e) =>
                setPrice((prevState) => ({
                  ...prevState,
                  min: Number(e.target.value),
                }))
              }
            />
          </Col>
          <Col>
            <Form.Control
              value={price?.max}
              type="number"
              placeholder="Max"
              onChange={(e) =>
                setPrice((prevState) => ({
                  ...prevState,
                  max: Number(e.target.value),
                }))
              }
            />
          </Col>
        </Row>
        <Button
          text="Set price"
          onClick={() => {
            updateValues({
              minPrice: price?.min ?? 0,
              maxPrice: price?.max ?? 0,
            });
          }}
          width="100%"
        />
      </div>
      <hr />
      <div className="rating px-5">
        <h6 className="my-2">Rating</h6>
        <div className="my-1">
          <label htmlFor={`rating`} className="d-flex align-items-center">
            <StarRating rating={4.5} />
            <span className="ms-2">above</span>
          </label>
        </div>
      </div>
      <hr />
      <div className="px-5">
        <AdBanner className="p-3 text-white">
          <h5 className="mb-2">GET 30% OFF</h5>
          <p>Share your referral code and get discount!</p>
          <button className="btn bg-warning w-100">Share</button>
        </AdBanner>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
