import Table, { Column } from "apollo-react/components/Table";
import React, { FC } from "react";
import FilePdf from "apollo-react-icons/FilePdf";
import Card from "apollo-react/components/Card";
const columns: Column[] = [
  {
    header: "SI#",
    accessor: "si",
  },
  {
    header: "Project Site ID",
    accessor: "projectsiteid",
  },
  {
    header: "Country",
    accessor: "country",
  },
  {
    header: "State",
    accessor: "state",
  },
  {
    header: "City",
    accessor: "city",
  },
];

const rowsEcgs: Array<{
  si: number;
  projectsiteid: string;
  country: string;
  state: string;
  city: string;
}> = [
  {
    si: 1,
    projectsiteid: "01",
    country: "Japan",
    state: "Tokyo",
    city: "sumida-ku",
  },
];
const SiteDetailsPage: FC = () => {
  return (
    <Card interactive={false} style={{ marginTop: "1rem" }}>
      <Table columns={columns} rows={rowsEcgs} />
    </Card>
  );
};

export default SiteDetailsPage;
