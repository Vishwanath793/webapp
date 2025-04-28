import React, { FC } from "react";

import Styles from "./typographyElement.module.scss";
import Select from "apollo-react/components/Select";
import Table from "apollo-react/components/Table";

interface LeftComponentProps {
  rows: [];
  columns: [];
}

const TableElement: FC<LeftComponentProps> = ({ rows, columns }) => {
  return (
    <div className={Styles.typographyElement}>
      <Table rows={rows} columns={columns}></Table>
    </div>
  );
};

export default TableElement;
