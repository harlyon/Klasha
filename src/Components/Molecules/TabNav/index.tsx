import React, { useState } from "react";
import { Button } from "Components/Atoms/Button";
import { Wrapper } from "./style";

interface TabNavProps {
  navs: string[];
}

const TabNav: React.FC<TabNavProps> = ({ navs }) => {
  // State
  const [active, setActive] = useState(0);
  return (
    <Wrapper>
      {navs.map((nav, index) => (
        <Button
          key={index}
          className={`btn-navs ${active === index ? "active" : ""}`}
          label={nav}
          onClick={() => setActive(index)}
        />
      ))}
    </Wrapper>
  );
};

export default TabNav;
