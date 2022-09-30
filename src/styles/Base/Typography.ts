import { css } from "styled-components";

export const Typography = css`
  body {
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    line-height: 1.7rem;
    font-weight: 500;
  }

  /* Headings */
  .heading {
    &-1 {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: var(--color-2);
    }
    &-2 {
      font-weight: 500;
      font-size: clamp(1.1rem, 4vw, 1.6rem);
      line-height: clamp(2rem, 4vw, 2.4rem);
      font-weight: 500;
      font-size: 1.6rem;
      color: var(--color-black);
    }
    &-3 {
      font-weight: 500;
      font-size: 2rem;
      line-height: 3.2rem;
      color: var(--color-4);
    }
    &-4 {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      color: var(--color-black);
    }
    &-5 {
      font-weight: 500;
      font-size: 2rem;
      line-height: 3.2rem;
      color: var(--color-black);
    }
    &-6 {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      color: var(--color-black);
    }
    &-7 {
      font-weight: 500;
      font-size: 2rem;
      line-height: 3.2rem;
      color: var(--color-white);
    }
    &-78 {
      font-weight: 500;
      font-size: 1.9rem;
      line-height: 2.3rem;
      color: var(--color-black);
    }
  }

  /* Paragraphs */
  .paragraph {
    &-1 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: var(--color-black);
    }
  }
`;
