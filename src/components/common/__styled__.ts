import styled from "styled-components";

export const StarsWrapper = styled.p`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  margin-top: 0.1rem;

  .rating-count {
    font-weight: bold;
  }

  .fa {
    display: inline-block;
    margin: 0 0.2rem;
    font-size: 0.8rem;
  }

  .rated {
    color: var(--orange);
  }

  .not-rated {
    color: white;
  }
`;
