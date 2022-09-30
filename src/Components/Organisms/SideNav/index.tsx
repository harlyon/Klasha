import React from "react";
// Node Modules

// Custom Components
import { Logo, LogoIcon } from "Components/Atoms/Logo";
import {
  Analytics,
  Balance,
  Cart,
  Dashboard,
  Exchange,
  LeftCaret,
  Link,
  Marketing,
  Transaction,
  Wire,
} from "Components/Atoms/SvgIcons";

// Style
import { Wrapper } from "./style";
import SideNavGroup from "../SideNavGroup";
import { IconButton } from "Components/Atoms/Button";
import { appStore } from "store/app";

// Local Variables
const navOne = [
  {
    title: "Main pages",
    links: [
      {
        icon: <Dashboard />,
        label: "Dashboard",
        to: "/",
      },
      {
        icon: <Balance />,
        label: "Balances",
        to: "#",
      },
      {
        icon: <Transaction />,
        label: "Transactions",
        to: "/transactions",
      },
      {
        icon: <Analytics />,
        label: "Analytics",
        to: "#",
      },
      {
        icon: <Marketing />,
        label: "Marketing",
        to: "#",
      },
      {
        icon: <Exchange />,
        label: "Exchange rates",
        to: "#",
      },
    ],
  },
];

const navTwo = [
  {
    title: "Accept payments",
    links: [
      {
        icon: <Cart />,
        label: "KlashaCheckout",
        to: "#",
      },
      {
        icon: <Link />,
        label: "Payment Links",
        to: "#",
      },
    ],
  },
];

const navThree = [
  {
    title: "Send payments",
    links: [
      {
        icon: <Wire />,
        label: "KlashaWire",
        to: "#",
      },
    ],
  },
];

interface SideNavProps {}
const SideNav: React.FC<SideNavProps> = () => {
  // Store
  const { mobileNavOpen, setPanelHide, panelHide } = appStore();
  // Data to render
  return (
    <Wrapper mobile={mobileNavOpen} iconMode={panelHide}>
      {panelHide ? (
        <LogoIcon className="mb-50 logo" />
      ) : (
        <Logo className="mb-50 logo" />
      )}

      <div className="links">
        {navOne.map((nav) => (
          <SideNavGroup key={nav.title} title={nav.title} links={nav.links} />
        ))}
        {navTwo.map((nav) => (
          <SideNavGroup key={nav.title} title={nav.title} links={nav.links} />
        ))}
        {navThree.map((nav) => (
          <SideNavGroup key={nav.title} title={nav.title} links={nav.links} />
        ))}
      </div>
      <div className="mt-80">
        <IconButton
          icon={<LeftCaret />}
          label="Hide panel"
          className="btn-primary btn-md"
          onClick={() => setPanelHide()}
          hideLabel={panelHide}
        />
      </div>
    </Wrapper>
  );
};

export default SideNav;
