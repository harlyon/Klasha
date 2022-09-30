import React from "react";
import Button from "./Button";

interface ButtonProps {
  className?: string;
  title?: any;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  label?: string;
  onClick?: (val?: any) => void;
  hideLabel?: boolean;
}
const IconButton: React.FC<ButtonProps> = (props) => {
  const { className, title, icon, onClick, label, iconPosition, hideLabel } =
    props;
  return (
    <Button
      className={`btn-icon ${iconPosition === "right" ? "reverse" : ""} ${
        className ? className : ""
      } ${hideLabel ? "rotate-180" : ""}`}
      onClick={onClick}
      title={title}
      iconPosition={iconPosition}
    >
      {icon}
      {!hideLabel && label}
    </Button>
  );
};

export default IconButton;
