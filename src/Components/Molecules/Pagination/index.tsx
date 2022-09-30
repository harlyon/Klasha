import React from "react";
import { Wrapper, PaginationButton } from "./style";

interface PaginationProps {}
const Pagination: React.FC<PaginationProps> = () => {
  return (
    <Wrapper>
      <PaginationButton>{`<`}</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>...</PaginationButton>
      <PaginationButton>8</PaginationButton>
      <PaginationButton>9</PaginationButton>
      <PaginationButton>10</PaginationButton>
      <PaginationButton>{`>`}</PaginationButton>
    </Wrapper>
  );
};

export default Pagination;
