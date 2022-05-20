import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const ProfileWrapper = styled.div`
  .profile {
    &__cart {
      position: relative;
      .counter {
        background: var(--primary-green);
        position: absolute;
        left: 1rem;
        bottom: -0.3rem;
        font-size: 0.8rem;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        animation: 2s ease 0s normal none infinite running wobble;
      }
    }
    &__heart {
      position: relative;
      .counter {
        background: var(--red);
        position: absolute;
        left: 1rem;
        bottom: -0.3rem;
        font-size: 0.8rem;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        animation: 1s ease 0s normal none infinite running wobble;
      }
    }
    &__avatar {
      border: 2px solid var(--primary-green);
      border-radius: 50%;
      img {
        border-radius: 50%;
        border: 1px solid var(--primary-white);
      }
    }
  }

  @keyframes wobble {
    0% {
      transform: translateX(0%);
    }
    15% {
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export const BootstrapNavbar = styled(Navbar)`
  .active {
    border-bottom: 3px solid var(--primary-green);
    border-radius: 0 0 0.2rem 0.2rem;
  }
`;
