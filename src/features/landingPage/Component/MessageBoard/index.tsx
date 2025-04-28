import Card from "apollo-react/components/Card";
import Table, { Column } from "apollo-react/components/Table";
import Typography from "apollo-react/components/Typography";
import React, { FC } from "react";
const columns: Column[] = [
  {
    header: "*SI",
    accessor: "si",
    // sortFunction: compareNumbers,
  },
  {
    header: "Protocol Number",
    accessor: "protocolnumber",
    // sortFunction: compareStrings,
  },
  {
    header: "Project Site ID",
    accessor: "projectsiteId",
    // sortFunction: compareStrings,
  },
  {
    header: "File Name",
    accessor: "filename",
    // customCell: DepartmentCell,
    // sortFunction: compareStrings,
  },
  {
    header: "Document Type",
    accessor: "documenttype",
    // sortFunction: compareStrings,
  },
  {
    header: "Date",
    accessor: "date",
    // customCell: DateCell,
    // sortFunction: compareDates,
  },
  {
    header: "Comments",
    accessor: "comments",
    // sortFunction: compareStrings,
  },
];

const rows: Array<{
  si: Number;
  comments: string;
  date: string;
  documenttype: string;
  filename: any;
  projectsiteId: any;
  protocolnumber: string;
}> = [
  {
    si: 1,
    comments: "Investigator Manual",
    date: "13-Feb-2024",
    documenttype: "Investigator ECG Manual and Visit Code Poster",
    filename: (
      <>
        <span>abcdsffd</span>
      </>
    ),
    projectsiteId: "projectsite1",
    protocolnumber: "AAWDD",
  },
  {
    si: 2,
    comments: "Visit Code Poster",
    date: "7-Jun-2023",
    documenttype: "Investigator ECG Manual and Visit Code Poster",
    filename: (
      <>
        <span>afdgf</span>
      </>
    ),
    projectsiteId: "projectsite2",
    protocolnumber: "ADDDS",
  },
  {
    si: 3,
    comments: "Visit Code Poster",
    date: "27-Apr-2024",
    documenttype: "Investigator ECG Manual and Visit Code Poster",
    filename: (
      <>
        <span>abcdsffdgfh</span>
      </>
    ),
    projectsiteId: "projectsite3",
    protocolnumber: "AADDD",
  },
  {
    si: 4,
    comments: "3 Lead Holter Instructions",
    date: "19-Oct-2024",
    documenttype: "Investigator ECG Manual and Visit Code Poster",
    filename: (
      <>
        <span>abc</span>
      </>
    ),
    projectsiteId: "projectsite4",
    protocolnumber: "AADDS",
  },
];

const MessageBoard: FC = () => {
  return (
    <>
      <Card
        style={{
          padding: "0.75rem",
          marginTop: "4.2rem",
        }}
        interactive={false}
      >
        <Typography>My Links</Typography>
        <Typography emphasis="high">Message Board</Typography>
        <>
          <Table
            columns={columns}
            rows={rows}
            defaultRowsPerPage={3}
            rowsPerPageOptions={[3, 5, 10, "All"]}
            tablePaginationProps={{
              labelDisplayedRows: ({ from, to, count }) =>
                `${
                  count === 1 ? " Record number" : " Record numbers"
                } ${from}-${to} of ${count}`,
              truncate: true,
            }}
          />
        </>
      </Card>
    </>
  );
};

export default MessageBoard;
