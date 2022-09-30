import styled from "styled-components";
import {
  FlexRowJcBetweenAiCenter,
  FlexRowJcEndAiCenter,
} from "styles/Abstract/Mixins";
import { Center } from "styles/layouts/Center";

export const Section = styled.section``;

export const Container = styled(Center)``;

const defaultSidePadding = "1.6rem";
export const TableWrapper = styled.div`
  border: 1px solid var(--color-5);
  border-radius: 0.8rem;

  .title {
    padding: 1.6rem ${defaultSidePadding} 2rem;
  }
  .actions {
    ${FlexRowJcBetweenAiCenter};
    gap: 1rem;
    padding: 0.6rem ${defaultSidePadding};
    border-top: 1px solid var(--color-5);
    border-bottom: 1px solid var(--color-5);
  }
  .pagination {
    ${FlexRowJcEndAiCenter};
    padding: 1rem ${defaultSidePadding};
    border-top: 1px solid var(--color-5);
  }
`;
