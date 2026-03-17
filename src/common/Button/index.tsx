import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, style }: ButtonProps) => (
  <StyledButton style={{ ...style }} color={color} onClick={onClick}>
    {children}
  </StyledButton>
);
