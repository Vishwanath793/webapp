import React, { FC, useState } from "react";
import Card from "apollo-react/components/Card";
import Grid from "apollo-react/components/Grid";
import MenuItem from "apollo-react/components/MenuItem";
import Select from "apollo-react/components/Select";
import Typography from "apollo-react/components/Typography";
import DatePicker from "apollo-react/components/DatePicker";
import TextField from "apollo-react/components/TextField";
import Button from "apollo-react/components/Button";
import Table, { Column } from "apollo-react/components/Table";
import moment from "moment";
import FilePdf from "apollo-react-icons/FilePdf";
import style from "./documentRepositoryStyle.module.scss";
// import {
//   compareStrings,
//   compareNumbers,
//   compareDates,
// } from "apollo-react/components/Table";
import Link from "apollo-react/components/Link";
import { styled } from "@mui/material";

interface DateCellProps {
  row: Record<string, any>;
  column: { accessor: string };
}

const DateCell: FC<DateCellProps> = ({ row, column }) => {
  const rowValue = row[column.accessor];
  const date =
    rowValue && moment(rowValue, "MM/DD/YYYY").isValid()
      ? moment(rowValue, "MM/DD/YYYY").format("M/D/YYYY")
      : rowValue;

  return <span>{date}</span>;
};

const columns: Column[] = [
  {
    header: "SI#",
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
    customCell: DateCell,
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
    comments: "For Testing Purpose",
    date: "13-Feb-2024",
    documenttype: "Investigator ECG Manual and Visit Code Poster",
    filename: (
      <>
        <Link size="small">
          <FilePdf htmlColor="blue" />
          test.pdf
        </Link>
      </>
    ),
    projectsiteId: "ALL",
    protocolnumber: "ESCRIBETEST",
  },
  {
    si: 2,
    comments: "3 Lead Holter Instructions",
    date: "7-Jun-2023",
    documenttype: "Investigator ECG Manual and Visit Code Poster",
    filename: (
      <>
        <Link size="small">
          <FilePdf htmlColor="blue" />
          Generic Investigator 3-Lead Holter Manual8Jul2010.pdf
        </Link>
      </>
    ),
    projectsiteId: "ALL",
    protocolnumber: "ESCRIBETEST",
  },
  {
    si: 3,
    comments: "Visit Code Poster",
    date: "27-Apr-2024",
    documenttype: "Investigator ECG Manual and Visit Code Poster",
    filename: (
      <>
        <Link size="small">
          <FilePdf htmlColor="blue" />
          ELI250_Visit Code Poster_27Jan2012.pdf
        </Link>
      </>
    ),
    projectsiteId: "ALL",
    protocolnumber: "ESCRIBETEST",
  },
  {
    si: 4,
    comments: "Investigator Manual",
    date: "19-Oct-2024",
    documenttype: "Investigator ECG Manual and Visit Code Poster",
    filename: (
      <>
        <Link>
          <FilePdf htmlColor="blue" />
          ELI250_Investigator_ECG_Manual_27Jan2012.pdf
        </Link>
      </>
    ),
    projectsiteId: "ALL",
    protocolnumber: "ESCRIBETEST",
  },
];
//may not be needed
const columns2: Column[] = [
  {
    header: "",
    accessor: "si",
    // sortFunction: compareNumbers,
  },
  {
    header: "",
    accessor: "protocolnumber",
    // sortFunction: compareStrings,
  },
  {
    header: "",
    accessor: "projectsiteId",
    // sortFunction: compareStrings,
  },
  {
    header: "",
    accessor: "filename",
    // customCell: DepartmentCell,
    // sortFunction: compareStrings,
  },
];
///may not be needed
const rows2: Array<{
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
        <span>
          <FilePdf />
          abcdsffd
        </span>
      </>
    ),
    projectsiteId: "projectsite1",
    protocolnumber: "AAWDD",
  },
];

const DocumentRepository: FC = () => {
  const [selectStateNumber, setSelectStateNumber] = useState("");
  const [selectStateId, setSelectStateId] = useState("");
  const [selectStateType, setSelectStateType] = useState("");
  const [selectStateFileName, setSelectStateFileName] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleChangeNumber = (e: any) => {
    setSelectStateNumber(e.target.value);
  };
  const handleChangeId = (e: any) => {
    setSelectStateId(e.target.value);
  };
  const handleChangeType = (e: any) => {
    setSelectStateType(e.target.value);
  };
  const handleChangeFileName = (e: any) => {
    setSelectStateFileName(e.target.value);
  };
  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };
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
        <Typography emphasis="high">Document Repository on the Web</Typography>
        <div style={{ backgroundColor: "#f8f9fb", padding: "0.5rem" }}>
          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <div style={{ width: "30rem" }}>
              <Select
                label="Protocol Number:"
                required
                value={selectStateNumber}
                onChange={handleChangeNumber}
                placeholder="select"
                fullWidth
                size="small"
              >
                <MenuItem value="1">{"ESCRIBETEST"}</MenuItem>
                <MenuItem value="2">{"1447-0005"}</MenuItem>
                <MenuItem value="3">{"20160323"}</MenuItem>
                <MenuItem value="4">{"BN42358"}</MenuItem>
                <MenuItem value="5">{"BN42358"}</MenuItem>
                <MenuItem value="6">{"BP41315"}</MenuItem>
                <MenuItem value="7">{"BP44382"}</MenuItem>
              </Select>
              <Select
                label="Project Site ID:"
                required
                value={selectStateId}
                onChange={handleChangeId}
                placeholder="select"
                fullWidth
                size="small"
                className={style.common}
              >
                <MenuItem value="1">{"All"}</MenuItem>
                <MenuItem value="2">{"001"}</MenuItem>
              </Select>
              <Select
                label="Document type:"
                required
                value={selectStateType}
                onChange={handleChangeType}
                placeholder="select"
                fullWidth
                size="small"
                className={style.common}
              >
                <MenuItem value="1">{"Holter Reports"}</MenuItem>
                <MenuItem value="2">
                  {"Investigator ECG Manual and Visit code poster"}
                </MenuItem>
              </Select>
            </div>
            <div style={{ width: "30rem" }}>
              <Select
                label="File Name:"
                value={selectStateFileName}
                onChange={handleChangeFileName}
                placeholder="select"
                fullWidth
                size="small"
              >
                <MenuItem value="1">{" test.pdf"}</MenuItem>
                <MenuItem value="2">
                  {"Generic Investigator 3-Lead Holter Manual8Jul2010.pdf"}
                </MenuItem>
                <MenuItem value="3">
                  {"ELI250_Visit Code Poster_27Jan2012.pdf"}
                </MenuItem>
                <MenuItem value="4">
                  {"ELI250_Investigator_ECG_Manual_27Jan2012.pdf"}
                </MenuItem>
              </Select>
              <div style={{ marginTop: "-1.85rem" }}>
                <DatePicker
                  label="Uploaded On From Date:"
                  helperText=""
                  fullWidth
                  size="small"
                />
              </div>
              <div style={{ marginTop: "-1.85rem" }}>
                <DatePicker
                  label="Uploaded On To Date:"
                  helperText=""
                  fullWidth
                  size="small"
                />
              </div>
            </div>
          </div>
          <div>
            <TextField
              label="Comments:"
              size="small"
              className={style.comments}
              fullWidth
            />
          </div>
          <Button variant="primary" size="small" onClick={handleSearchClick}>
            Search
          </Button>
        </div>
        <Card
          style={{
            padding: "0.75rem",
            marginTop: "2.2rem",
          }}
          interactive={false}
        >
          <Typography
            emphasis="high"
            style={{
              height: "4.2rem",
              alignContent: "center",
              marginLeft: "0.5rem",
            }}
          >
            Uploaded files
          </Typography>
          <div style={{ backgroundColor: "#f8f9fb" }}>
            {isSearchClicked && (
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
            )}
          </div>
        </Card>
      </Card>
    </>
  );
};

export default DocumentRepository;
