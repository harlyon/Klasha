import React, { useState } from "react";
import Typography from "Components/Atoms/Typography";
import Button from "./Button";
import { Flex } from "styles/layouts/Flex";

interface ButtonProps {
  className?: string;
  title?: any;
  icon?: JSX.Element;
  label?: string;
  onClick?: (val?: any) => void;
}
const SwitchButton: React.FC<ButtonProps> = (props) => {
  // Props
  const { className, title } = props;

  //   State
  const [active, setActive] = useState(false);
  return (
    <Flex gap=".8rem" flexRowAiCenter>
      <Button
        className={`btn-switch ${active ? "active" : ""} ${
          className ? className : ""
        }`}
        onClick={() => setActive(!active)}
        title={title}
      >
        <div className={`${active ? "active" : ""}`}></div>
      </Button>
      <Typography as="h6" className="flex-shrink-0" text={`${active ? "Live" : "Live"}`} />
    </Flex>
  );
};

export default SwitchButton;
