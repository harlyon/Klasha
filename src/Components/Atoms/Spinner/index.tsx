import React from "react";
import { SpinnerStyle } from "./Style";

interface Props {}
const Spinner: React.FC<Props> = () => {
  return (
    <SpinnerStyle>
      <i className="fas fa-spinner"></i>
    </SpinnerStyle>
  );
};

export default Spinner;
