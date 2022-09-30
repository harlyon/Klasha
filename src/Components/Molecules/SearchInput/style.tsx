import styled from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div`
  ${FlexRowAiCenter};
  border: 1px solid var(--color-6);
  border-radius: 0.8rem;
  padding: 1rem 1.4rem;

  input {
    flex-grow: 1;
    border: none;
    background-color: transparent;
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--color-7);
    font-family: inherit;

    &:active,
    &:focus {
      border: none;
      outline: 0;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--color-7);
    }
  }

  svg {
    flex-shrink: 0;
  }
`;
