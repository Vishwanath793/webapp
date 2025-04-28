import Table, { Column } from "apollo-react/components/Table";
import React, { FC, useState } from "react";

const columns: Column[] = [
  {
    header: "*SI",
    accessor: "si",
  },
  {
    header: "ECG ID",
    accessor: "id",
  },
  {
    header: "Protocol Number",
    accessor: "protocolnumber",
  },
  {
    header: "Project Site ID",
    accessor: "projectsiteid",
  },
  {
    header: "Subject ID",
    accessor: "subjectid",
  },
  {
    header: "Date of Birth",
    accessor: "dateofbirth",
  },
  {
    header: "Gender",
    accessor: "gender",
  },
  {
    header: "ECG Recording Date/Time",
    accessor: "recording",
  },
  {
    header: "Reports",
    accessor: "reports",
  },
  {
    header: "Pending DCFs",
    accessor: "pendingdcfs",
  },
];

const rowsEcgs: Array<{
  si: number;
  reports: any;
  pendingdcfs: any;
  recording: any;
  gender: string;
  dateofbirth: any;
  subjectid: string;
  projectsiteid: string;
  protocolnumber: string;
  id: string;
}> = [
  {
    si: 1,
    reports: "d",
    pendingdcfs: "dssfdf",
    recording: "dssfdf",
    gender: "dssfdf",
    dateofbirth: "dssfdf",
    subjectid: "dssfdf",
    projectsiteid: "dssfdf",
    protocolnumber: "dssfdf",
    id: "dssfdf",
  },
];
const DCFPage: FC = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  return (
    <>
      {!isDataLoaded ? (
        <div>{"No Data Found"} </div>
      ) : (
        <Table columns={columns} rows={rowsEcgs} hidePagination />
      )}
    </>
  );
};

export default DCFPage;
