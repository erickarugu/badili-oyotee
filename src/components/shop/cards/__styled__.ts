import styled from "styled-components";

export const CardsWrapper = styled.div`
  .skel {
    flex-grow: 1;
    min-width: 280px;
    max-width: 350px;
    height: 300px;
    border: 1px solid var(--gray);
    border-radius: 1rem;
  }
  .no-prods {
    .icon {
      background: var(--red);
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
export const CardWrapper = styled.div`
  flex-grow: 1;
  min-width: 280px;
  max-width: 400px;
  border: 1px solid var(--dark-gray);
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
  .cart {
    .btn.custom {
      border: 1px solid var(--dark-gray);
      border-radius: 1rem;
      &.added {
        color: var(--white);
        background: var(--primary-green);
      }
    }
  }
`;
