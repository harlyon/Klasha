import React from "react";
import { ReactComponent as LogoIcon } from "./assets/logo.svg";

interface Props {
  className?: string;
}
const Logo: React.FC<Props> = (props) => {
  return <LogoIcon {...props} />;
};

export default Logo;
