import Typography from "Components/Atoms/Typography";
import SideNavLink from "Components/Molecules/SideNavLink";
import React from "react";
import { appStore } from "store/app";
import { Wrapper } from "./style";

interface SideNavGroupProps {
  title: string;
  links?: Array<{ icon?: JSX.Element; label?: string; to?: string }>;
}
const SideNavGroup: React.FC<SideNavGroupProps> = ({ title, links }) => {
  // Store
  const { panelHide } = appStore();

  return (
    <Wrapper>
      {title && !panelHide && (
        <Typography as="h6" className="heading-1" text={title} />
      )}
      {links?.map((link) => (
        <SideNavLink key={link.label} {...link} />
      ))}
    </Wrapper>
  );
};

export default SideNavGroup;
