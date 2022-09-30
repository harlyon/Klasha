import React from "react";
import { ReactComponent as LogoIconn } from "./assets/logo2.svg";

interface Props {
  className?: string;
}
const LogoIcon: React.FC<Props> = (props) => {
  return <LogoIconn {...props} />;
};

export default LogoIcon;
