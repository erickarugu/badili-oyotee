import React from "react";
import styled from "styled-components";

interface IButtonProps {
  text: string;
  onClick: () => void;
  width: string;
}
const Button: React.FC<IButtonProps> = ({ text, onClick, width }) => {
  return (
    <ButtonWrapper
      className="px-3 py-2 text-white"
      onClick={onClick}
      width={width}
    >
      {text}
    </ButtonWrapper>
  );
};

export { Button };

interface IButtonWrapperProps {
  width?: string;
}
const ButtonWrapper = styled.button<IButtonWrapperProps>`
  background-color: var(--primary-green);
  width: ${(props) => props.width ?? "100%"};
  border: none;
  border-radius: 1rem;
`;
