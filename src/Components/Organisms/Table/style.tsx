import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-x: hidden;
  .table-wrapper {
    overflow-x: auto;
  }

  .table {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    .table {
      width: 120%;
    }
  }
  @media only screen and (max-width: 900px) {
    .table {
      width: 150%;
    }
  }
  @media only screen and (max-width: 600px) {
    .table {
      width: 180%;
    }
  }
  @media only screen and (max-width: 410px) {
    .table {
      width: 220%;
    }
  }
  @media only screen and (max-width: 360px) {
    .table {
      width: 130%;
    }
  }

  .table-row {
    transition: 0.4s;
    &:hover {
      background-color: var(--color-10);
    }
  }

  .table-head,
  .table-body {
    padding: 1.5rem 1rem;
  }
  @media only screen and (max-width: 900px) {
    .table-head,
    .table-body {
      padding: .6rem;
    }
  }

  .table-head {
    text-align: left;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--color-8);
  }

  .table-body {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--color-9);
  }
`;
