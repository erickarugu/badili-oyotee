import React from "react";
import { SortWrapper } from "./__styled__";

const Sort = () => {
  return (
    <SortWrapper className="d-flex align-items-center mb-3 mt-3">
      <h6 className="me-2">Sort</h6>
      <button className={`btn custom py-1 px-3 mx-2 active`}>Relevance</button>
      <button className={`btn custom py-1 px-3 mx-2`}>Popular</button>
      <button className={`btn custom py-1 px-3 mx-2`}>Most New</button>
      <button className={`btn custom py-1 px-3 mx-2`}>
        Price
        <span className="ms-2">
          <i className="fa fa-angle-down"></i>
          {/* <i className="fa fa-angle-up"></i> */}
        </span>
      </button>
    </SortWrapper>
  );
};

export default Sort;
