import styled from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";
import { Button } from "styles/Components/Button";

export const ButtonStyle = styled(Button)<{ iconPosition?: "left" | "right" }>`
  &.btn {
    /* Types */
    &-primary {
      border: 1px solid var(--color-black);
      border-radius: 0.6rem;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    }
    &-icon {
      ${FlexRowAiCenter};
      gap: 1.6rem;
      color: var(--color-12);

      &--bold {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      &.reverse {
        flex-direction: row-reverse;
      }
    }
    &-switch {
      border-radius: 1.2rem;
      transition: 0.4s;
      position: relative;
      width: 4.2rem;
      height: 2.4rem;
      background-color: var(--color-primary);

      & > * {
        width: 2rem;
        height: 2rem;
        background-color: var(--color-white);
        transition: 0.4s;
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        border-radius: 50%;

        &.active {
          transform: translateX(calc(100% - 0.2rem));
          right: 0.2rem;
        }
      }
    }

    &-navs {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: var(--color-black);
      transition: 0.4s;

      &.active {
        color: var(--color-primary);
      }
    }

    &-dark {
      background-color: var(--color-black);
      border-radius: 0.8rem;
      color: var(--color-white);
    }

    /* Sizes */
    &-md {
      /* font-weight: 400;
      font-size: 1.2rem; */
      padding: 1.5rem 2.5rem;
    }
    &-sm {
      /* font-weight: 400;
      font-size: 1.2rem; */
      padding: 1rem 1.5rem;
    }
    &-full {
      width: 100%;
    }
    &-bold {
    }
  }
`;
