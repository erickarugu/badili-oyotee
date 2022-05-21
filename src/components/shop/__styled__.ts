import styled from "styled-components";

export const ImageCarouselWrapper = styled.div`
  max-width: 350px;
  border-left: 1px solid var(--gray);
  margin-left: auto;
  .active-image {
    position: relative;
    overflow: hidden;
    .close-icon {
      position: absolute;
      background: rgba(0, 3, 1, 0.1);
      border-radius: 0.5rem;
      height: 25px;
      width: 25px;
      right: 1rem;
      top: 1rem;
    }
    img {
      max-width: 300px;
    }
  }
  .carousel {
    &__image {
      border-radius: 1rem;
      overflow: hidden;
      width: 60px;
      height: 60px;
      background: rgba(0, 3, 1, 0.1);
      position: relative;
      &.active {
        border: 2px solid var(--primary-green);
      }
      &.more {
        background: rgba(0, 3, 1, 0.5);
      }
      .counter {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
      }
    }
  }
  p {
    span {
      color: var(--primary-green);
      font-weight: bold;
    }
  }
  .tabs {
    .tab {
      color: var(--dark-gray);
    }
    .active {
      color: #000;
      border-bottom: 2px solid var(--primary-green);
    }
  }
`;
export const ImageListWrapper = styled.div`
  flex-grow: 1;
  .search-str {
    color: var(--dark-gray);
    span {
      font-weight: bold;
      color: var(--dark);
    }
  }
`;
