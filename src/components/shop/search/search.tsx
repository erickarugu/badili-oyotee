import React from "react";
import { SearchWrapper } from "./__styled__";

interface ISearch {
  searchStr: string;
  setSearchStr: (input: any) => void;
}
const Search: React.FC<ISearch> = ({ searchStr, setSearchStr }) => {
  const handleChange = (e: any) => setSearchStr(e.target.value);
  return (
    <SearchWrapper className="my-2">
      <input
        type="text"
        placeholder="Enter string to search"
        value={searchStr}
        onChange={handleChange}
      />
      <span className="search-icon d-flex justify-content-center align-items-center">
        <i className="fa fa-search"></i>
      </span>
      <span
        className="close d-flex justify-content-center align-items-center"
        onClick={() => setSearchStr("")}
        style={{ cursor: "pointer" }}
      >
        X
      </span>
    </SearchWrapper>
  );
};

export default Search;
