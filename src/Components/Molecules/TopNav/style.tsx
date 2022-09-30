import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexColumn, FlexRowJcBetweenAiCenter } from "styles/Abstract/Mixins";
import { Center } from "styles/layouts/Center";

export const Wrapper = styled.nav`
  border-bottom: 1px solid var(--color-3);
  padding-top: 5rem;
  padding-bottom: 2rem;
  margin-bottom: 6rem;
`;

export const Container = styled(Center)`
  ${FlexRowJcBetweenAiCenter};
  gap: 2rem;

  .mobile-menu {
    ${FlexColumn};
    gap: 0.4rem;
    width: 2.5rem;
    margin-left: auto;
    display: none;
    cursor: pointer;

    span {
      width: 100%;
      height: 0.4rem;
      background-color: var(--color-primary);
    }

    ${responsive(
      "sm",
      `
      display: flex;
    `
    )}
  }
`;
