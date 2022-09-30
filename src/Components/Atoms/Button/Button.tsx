import React from "react";
import { ButtonStyle } from "./style";

interface ButtonProps {
  label?: any;
  className?: string;
  children?: any;
  onClick?: (val?: any) => void;
  type?: any;
  disabled?: boolean;
  title?: string;
  iconPosition?: "left" | "right";
}
const Button: React.FC<ButtonProps> = (props) => {
  const { label, children } = props;
  return <ButtonStyle {...props}> {label || children} </ButtonStyle>;
};

export default Button;
