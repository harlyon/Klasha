import styled from "styled-components";

export const Wrapper = styled.div<{ dark?: Boolean }>`
  border-radius: 0.8rem;
  background-color: ${(props) =>
    props.dark ? "var(--color-black)" : "var(--color-white)"};
  border: 1px solid var(--color-black);
  padding: 2.5rem;

  .graph {
    margin: 3rem 0;
    img {
      width: 100%;
    }
  }
`;
