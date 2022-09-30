import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexColumn } from "styles/Abstract/Mixins";

export const Wrapper = styled.nav<{ mobile: any; iconMode: any }>`
  padding: 5rem;
  flex-basis: var(--dashboard-side-nav-width);
  overflow-y: auto;
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: var(--color-1);
  ${FlexColumn};
  justify-content: space-between;
  flex-shrink: 0;
  z-index: 5;
  ${(props) => (props.iconMode ? "flex-basis: auto; width: max-content;" : "")}

  .logo {
    flex-shrink: 0;
    /* position: sticky;
    top: 0; */
  }

  .links {
    flex-grow: 1;
    ${FlexColumn};
    gap: 3.4rem;
  }

  ${responsive("sm", `display: none`)}
  ${(props) =>
    props.mobile ? `position: fixed; display: flex !important;` : ""}
`;
