import styled from "styled-components";
import { Center } from './Center';

export const InAppPageLayout = styled(Center)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  padding-top: 9rem;
  padding-bottom: 9rem;
`;
