import React from "react";
import TableHead from "Components/Molecules/TableHead";
import TableBody from "Components/Molecules/TableBody";
import { Wrapper } from "./style";

interface Props {
  columns: any;
  data: any;
}
const Table: React.FC<Props> = (props) => {
  const { data, columns } = props;
  return (
    <Wrapper>
      <div className="table-wrapper">
        <table className="table">
          <TableHead columns={columns} />
          <TableBody data={data} columns={columns} />
        </table>
      </div>
    </Wrapper>
  );
};

export default Table;
