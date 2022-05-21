import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  input {
    background: var(--gray);
    border: none;
    height: 3.2rem;
    border-radius: 0.6rem;
    width: 100%;
    padding-left: 3rem;
    &:focus {
      border: 1px solid var(--primary-green);
    }
  }
  span {
    position: absolute;
    &.search-icon {
      top: 50%;
      left: 1rem;
      transform: translate(0, -50%);
    }
    &.close {
      top: 50%;
      right: 1rem;
      transform: translate(0, -50%);
    }
  }
`;
