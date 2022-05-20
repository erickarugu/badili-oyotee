import styled from "styled-components";
import plant from "./../../dist/images/plant_bg.jpg";

export const SideBarWrapper = styled.div`
  max-width: 20rem;
  border-right: 1px solid var(--gray);
  min-height: 100vh;
  margin-top: 0;

  .categories .category {
    [type="checkbox"] {
      opacity: 0;
      position: absolute;
      top: 100%;
      transform: translate(0, 50%);
    }

    .custom-checkbox {
      min-width: 1rem;
      min-height: 1rem;
      margin-right: 0.75em;
      border: 2px solid var(--gray);
      border-radius: 0.1rem;
      display: inline-block;
      margin-top: 0.4rem;
    }

    [type="checkbox"]:checked + label .custom-checkbox {
      border-color: var(--primary-green);
      background: var(--primary-green);
      box-shadow: inset 0 0 0 2px white;
    }
  }
`;

export const AdBanner = styled.div`
  background-image: url(${plant});
  background-color: rgba(0, 0, 0, 0.6);
  background-size: auto;
  background-position: center;
  border-radius: 1rem;
  background-blend-mode: overlay;
`;
