import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: var(--color-white);
  width: 70rem;
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  padding: 0 4rem 5rem;

  .top {
    position: sticky;
    top: 0;
    background-color: var(--color-white);
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  .btn {
    &-icon {
      background: var(--color-white);
      border: 1px solid var(--color-5);
      border-radius: 1rem;
      display: grid;
      place-items: center;
      width: 4rem;
      height: 4rem;

      &.small {
        max-width: 3.6rem;
        max-height: 3.6rem;
      }

      &.muted {
        border: 3px solid red;
      }
    }
  }

  .content {
    padding-top: 3rem;
  }
`;

export const CenterModalStyle = styled.div<{ size?: string }>`
  background-color: var(--color-white);
  flex-basis: ${({ size }) => (size === "big" ? "90rem" : "50rem")};
  padding: 0 2rem 5rem;
  border-radius: 1.2rem;
  max-height: 90vh;
  margin-top: 5vh;
  overflow: auto;

  .top {
    background-color: var(--color-white);
    position: sticky;
    top: 0;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .btn {
    &-icon {
      background: var(--color-white);
      border: 1px solid var(--color-5);
      border-radius: 1rem;
      display: grid;
      place-items: center;
      width: 4rem;
      height: 4rem;

      &.small {
        max-width: 3.6rem;
        max-height: 3.6rem;
      }
    }
  }

  .content {
    /* padding-top: 3rem; */
  }
`;
