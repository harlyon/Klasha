import React from "react";
import { Container } from "./style";

interface DividerProps {}
const Divider: React.FC<DividerProps> = () => {
  return <Container className="hide-on-mobile" />;
};

export default Divider;
