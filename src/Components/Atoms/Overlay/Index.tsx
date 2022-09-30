import React from "react";
import { OverlayStyle } from "./Style";

interface Props {
  children?: JSX.Element;
  initial?: any;
  animate?: any;
  variants?: any;
  transition?: any;
  position?: any;
}
const Overlay: React.FC<Props> = (props) => {
  const { children, position } = props;
  return (
    <OverlayStyle position={position} {...props}>
      {children}
    </OverlayStyle>
  );
};

export default Overlay;
