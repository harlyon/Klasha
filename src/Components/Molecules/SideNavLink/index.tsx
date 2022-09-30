import Typography from "Components/Atoms/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { appStore } from "store/app";
import { LinkElement } from "./style";

interface SideNavLinkProps {
  to?: string;
  icon?: JSX.Element;
  label?: string;
  className?: string;
}
const SideNavLink: React.FC<SideNavLinkProps> = (props) => {
  // props
  const { icon, label, to, className } = props;
  // Store
  const { setActiveSideNav, activeSideNav, panelHide } = appStore();
  return (
    <Link to={to ? to : "#"} className="text-decoration-none">
      <LinkElement
        className={`${className} ${activeSideNav === label ? "active" : ""}`}
        onClick={() => setActiveSideNav(label)}
      >
        {icon}
        {!panelHide && (
          <Typography as="span" className="paragraph-1" text={label} />
        )}
      </LinkElement>
    </Link>
  );
};

export default SideNavLink;
