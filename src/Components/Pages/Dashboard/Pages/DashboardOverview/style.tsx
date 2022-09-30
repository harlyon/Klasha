import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexRow } from "styles/Abstract/Mixins";
import { Center } from "styles/layouts/Center";

export const Section = styled.section``;

export const Container = styled(Center)``;

export const Overviews = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(Min(25.6rem, 100%), 1fr));
  justify-content: space-between;
  gap: 2.4rem;
`;

export const SalesSectionLayout = styled.div`
  ${FlexRow};
  gap: 2.4rem;

  .left {
    flex-grow: 1;
  }

  .right {
    flex-basis: 30.4rem;
  }

  ${responsive("sm", `flex-direction: column`)}
`;

export const GraphContainer = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  border-radius: 0.8rem;
  padding: 2rem 3rem;
`;

export const SendWireCard = styled.div`
  background-image: url("/assets/images/bgg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin-top: 6.6rem;

  ${responsive("sm", " margin-top: 1.6rem")}
`;
