import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

function Button({
  name,
  leftIcon,
  rightIcon,
  onClick,
  bg,
  color,
  bPad,
  bRad,
  hColor,
  isLoading,
  isDisabled,
  outlined,
  full,
}) {
  return (
    <ButtonStyled
      style={{
        background: outlined ? "transparent" : bg,
        padding: bPad,
        borderRadius: bRad,
        color: outlined ? bg : color,
        border: outlined ? `1px solid ${bg}` : "none",
        width: full ? "100%" : "auto",
        opacity: isLoading || isDisabled ? 0.8 : 1,
        cursor: isLoading || isDisabled ? "not-allowed" : "pointer",
      }}
      onClick={!isLoading && !isDisabled ? onClick : undefined}
    >
      {isLoading && (
        <CircularProgress
          style={{ width: "18px", height: "18px", color: "inherit" }}
        />
      )}
      {leftIcon}
      {name}
      {rightIcon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ hoverColor }) => hoverColor || "inherit"};
  }
`;

export default Button;