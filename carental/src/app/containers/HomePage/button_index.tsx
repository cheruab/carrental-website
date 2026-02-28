import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.9em 2em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  ${tw`m-1`};
`;

const OutlinedButton = styled(BaseButton)`
  background: linear-gradient(135deg, #c9a84c, #e8d5a3);
  color: #0a0a0f;
  font-weight: 700;

  &:hover {
    background: linear-gradient(135deg, #b8943c, #d4c090);
    box-shadow: 0 4px 20px rgba(201, 168, 76, 0.4);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FilledButton = styled(BaseButton)`
  background: transparent;
  color: #c9a84c;
  border: 1px solid #c9a84c;
  font-weight: 600;

  &:hover {
    background: rgba(201, 168, 76, 0.1);
    box-shadow: 0 4px 20px rgba(201, 168, 76, 0.15);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled")
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;
}