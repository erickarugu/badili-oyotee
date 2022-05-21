import styled from "styled-components";

export const SortWrapper = styled.div`
  h6 {
    color: var(--dark-gray);
  }
  .btn.custom {
    border: 1px solid var(--dark-gray);
    border-radius: 1rem;
    &.active {
      background: var(--primary-green);
      color: var(--white);
    }
  }
`;
