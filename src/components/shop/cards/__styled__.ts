import styled from "styled-components";

export const CardsWrapper = styled.div``;
export const CardWrapper = styled.div`
  flex-grow: 1;
  min-width: 280px;
  max-width: 400px;
  border: 1px solid var(--gray);
  border-radius: 1rem;
  &.active {
    border: 1px solid var(--primary-green);
  }
  .image {
    position: relative;
    overflow: hidden;
    .close-icon {
      position: absolute;
      background: var(--gray);
      border-radius: 0.5rem;
      height: 25px;
      width: 25px;
      right: 1rem;
      top: 1rem;
      .fa {
        color: rgba(255, 0, 0, 0.2);
      }
      &.clicked {
        background: rgba(255, 0, 0, 0.2);
        .fa {
          color: var(--red);
        }
      }
    }
    img {
      max-width: 200px;
    }
  }
`;
