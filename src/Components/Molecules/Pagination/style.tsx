import styled from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";
import { Button } from "styles/Components/Button";

export const Wrapper = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-5);
  border-radius: 0.5rem;
  padding: 1.2rem 1.4rem;
  ${FlexRowAiCenter};
  gap: 3rem;
`;

export const PaginationButton = styled(Button)`
  display: grid;
  place-items: center;

  font-weight: 600;
  font-size: 1.4rem;
  color: var(--color-11);

  
`;
