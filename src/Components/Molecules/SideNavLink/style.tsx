import styled from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";

export const LinkElement = styled.span`
  ${FlexRowAiCenter};
  gap: 1rem;

  svg {
    & > * {
      transition: 0.4s;
    }
  }
  span {
    transition: 0.4s;
  }

  &:hover {
    svg {
      & > * {
        stroke: var(--color-primary);
      }
    }
    span {
      color: var(--color-primary);
    }
  }

  &.active {
    svg {
      & > * {
        stroke: var(--color-primary);
      }
    }
    span {
      color: var(--color-primary);
      font-weight: 600;
    }
  }
`;
