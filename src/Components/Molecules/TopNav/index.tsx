import React from "react";
import Typography from "Components/Atoms/Typography";
import { today } from "Utils/helper";
import { Wrapper, Container } from "./style";
import { IconButton, SwitchButton } from "Components/Atoms/Button";
import { CaretDown } from "Components/Atoms/SvgIcons";
import { Flex } from "styles/layouts/Flex";
import Divider from "Components/Atoms/Divider";
import { appStore } from "store/app";

interface TopNavProps {}
const TopNav: React.FC<TopNavProps> = () => {
  // Store
  const { setMobileNavOpen } = appStore();
  return (
    <Wrapper>
      <Container>
        <Typography as="h5" className="heading-2" text={`Today: ${today()}`} />
        <Flex gap="2rem" className="hide-on-mobile" flexRowAiCenter>
          <SwitchButton />
          <Divider />
          <IconButton
            iconPosition="right"
            label="Welcome back, Ada!"
            icon={<CaretDown />}
            className="btn-icon--bold"
          />
          <IconButton
            className="btn-icon--bold"
            iconPosition="right"
            label="En"
            icon={<CaretDown />}
          />
        </Flex>
        <div className="mobile-menu" onClick={setMobileNavOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Container>
    </Wrapper>
  );
};

export default TopNav;
