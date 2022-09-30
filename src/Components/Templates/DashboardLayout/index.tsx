import React from "react";
import TopNav from "Components/Molecules/TopNav";
// Styles
import { Wrapper, Main } from "./style";
import SideNav from "Components/Organisms/SideNav";

interface DashboardLayoutProps {
  children?: JSX.Element;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <SideNav />
      <Main>
        <TopNav />
        {children}
      </Main>
    </Wrapper>
  );
};

export default DashboardLayout;
