import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { fetchCategories, IFilterProducts } from "../../api";
import { ICategory } from "../../api/data";
import { Button, StarRating } from "../common";
import { AdBanner, SideBarWrapper } from "./__styled__";

const SideBar = () => {
  const [categories, setCategories] = useState<ICategory[]>();
  const [filters, setFilters] = useState<IFilterProducts>();

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const categories = fetchCategories();
        setCategories(categories);
      }, 3000);
    };
    fetchData();
  }, []);

  const updateValues = (input: any) => {
    setFilters((prevState) => ({ ...prevState, ...input }));
  };
  return (
    <SideBarWrapper className="sidebar mb-4">
      <h5 className="pt-4 ms-5 font-weight-lighter">Filter</h5>
      <hr />
      <div className="categories ps-5">
        <h6 className="mb-2">Categories</h6>
        {categories?.map((category: ICategory, idx: number) => (
          <div
            className="category d-flex align-items-center my-1"
            key={`cat-${idx}-${category.id}`}
          >
            <input
              onChange={() => updateValues({ categoryId: category.id })}
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
            <Form.Control type="number" placeholder="Min" />
          </Col>
          <Col>
            <Form.Control type="number" placeholder="Max" />
          </Col>
        </Row>
        <Button
          text="Set price"
          onClick={() => {
            return;
          }}
          width="100%"
        />
      </div>
      <hr />
      <div className="rating px-5">
        <h6 className="my-2">Rating</h6>
        <div className="d-flex align-items-center my-1">
          <input
            onChange={() => {
              return;
            }}
            type="checkbox"
            id={`rating`}
          />
          <label htmlFor={`rating`} className="">
            <span className="custom-checkbox me-4"></span>
            <StarRating rating={4.5} />
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
