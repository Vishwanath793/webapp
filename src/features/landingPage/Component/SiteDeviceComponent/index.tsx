import React, { FC, useState } from "react";
import Card from "apollo-react/components/Card";
import Grid from "apollo-react/components/Grid";
import MenuItem from "apollo-react/components/MenuItem";
import Select from "apollo-react/components/Select";
import Typography from "apollo-react/components/Typography";
import TextField from "apollo-react/components/TextField";
import Button from "apollo-react/components/Button";
import Table, { Column } from "apollo-react/components/Table";
import moment from "moment";
import FileUpload from "apollo-react/components/FileUpload";
import style from "./siteDeviceComponent.module.scss";
import TextfieldElement from "../../../common/atoms/textfieldElement/index";
import DatePickerElement from "../../../common/atoms/datePickerElement/index";
import TimePickerElement from "../../../common/atoms/timePickerElement/index";

import SelectElement from "../../../common/atoms/selectElement/index";
// import {
//   compareStrings,
//   compareNumbers,
//   compareDates,
// } from "apollo-react/components/Table";

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

const uploadedColumns: Column[] = [
  {
    header: "ECG File Name",
    accessor: "ecgfilename",
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
    header: "Randomization No.",
    accessor: "randomizationnumber",
  },
  {
    header: "DOB",
    accessor: "dob",
  },
  {
    header: "Gender",
    accessor: "gender",
  },
  {
    header: "Subject Initials",
    accessor: "subjectinitials",
  },
  {
    header: "Visit ID",
    accessor: "visitid",
  },

  {
    header: "ECG Recording Date and time",
    accessor: "ecgrecordingdateandtime",
  },
  {
    header: "Uploaded By",
    accessor: "uploadedby",
  },
];

const uploadedRows: Array<{
  legendkey: string;
  tasksummary: any;
  noofecgs: number;
}> = [];

const SiteDeviceComponent: FC = () => {
  const [selectState, setSelectState] = useState("");
  const [selectSiteState, setSelectSiteState] = useState("");
  const [selectGenderState, setSelectGenderState] = useState("");
  const [value, setValue] = useState<File[]>([]);

  const projectSiteMenuItems = [
    { value: "001", name: "001" },
    { value: "002", name: "002" },
    { value: "1001", name: "1001" },
    { value: "123", name: "123" },
  ];
  const protocolNumberMenuItems = [
    { value: "ESCRIBETEST", name: "ESCRIBETEST" },
    { value: "1447-0005", name: "1447-0005" },
    { value: "20160323", name: "20160323" },
    { value: "BN42358", name: "BN42358" },
    { value: "BN42358", name: "BN42358" },
    { value: "BP41315", name: "BP41315" },
    { value: "BP44382", name: "BP44382" },
  ];
  const genderMenuItems = [
    { value: "Male", name: "Male" },
    { value: "Female", name: "Female" },
    { value: "Unspecified", name: "Unspecified" },
  ];
  const handleUpload = (newValue: File[]) => {
    setValue((prevValue) => [...prevValue, ...newValue]);
  };

  const handleDelete = (file: File) => {
    setValue((prevValue) =>
      prevValue.filter((item) => item.name !== file.name)
    );
  };
  const handleChange = (e: any) => {
    setSelectState(e.target.value);
  };
  const handleChangeSite = (e: any) => {
    setSelectSiteState(e.target.value);
  };
  const handleChangeGender = (e: any) => {
    setSelectGenderState(e.target.value);
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
        <Typography className={style.myLinks}>My Links</Typography>
        <Typography style={{ marginBottom: "0.5rem" }} emphasis="high">
          Site Device ECG Upload
        </Typography>
        <Grid
          container
          spacing={2}
          style={{
            padding: "1.35rem",
          }}
        >
          <Grid
            item
            xs={3}
            style={{ backgroundColor: "#f8f9fb", padding: "0.75rem" }}
          >
            <Typography>Protocol Details</Typography>
            <SelectElement
              label="Protocol Number:"
              helperText=""
              menuItems={protocolNumberMenuItems}
              value={selectState}
              onChange={handleChange}
              placeholder="select"
              isFullWidth
              isRequired={true}
              size="small"
            />

            <SelectElement
              menuItems={projectSiteMenuItems}
              helperText=""
              label="Project Site ID:"
              isRequired={true}
              value={selectSiteState}
              onChange={handleChangeSite}
              placeholder="select"
              isFullWidth
              size="small"
            />

            <TextfieldElement
              label="Visit ID"
              size="small"
              isFullWidth
              isRequired={true}
            />
          </Grid>

          <Grid
            item
            xs={3}
            style={{
              backgroundColor: "#f8f9fb",
              padding: "0.75rem",
            }}
          >
            <Typography>Subject Details</Typography>
            <TextfieldElement
              label="Subject ID"
              size="small"
              isFullWidth={true}
              isRequired={true}
            />
            <TextfieldElement
              label="Randomization Number"
              size="small"
              isFullWidth
              isRequired={true}
            />
            <DatePickerElement
              label="DOB:"
              helperText=""
              isFullWidth
              size="small"
              dateFormat="DD-MMM-YYYY"
              placeholder="dd-mmm-yyyy"
              isRequired={true}
            />
            {/* <div style={{ marginTop: "-1.85rem" }}>
            </div> */}
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              backgroundColor: "#f8f9fb",
              padding: "0.75rem",
            }}
          >
            <Typography sx={{ visibility: "hidden" }}>
              Subject Details
            </Typography>
            <TextfieldElement
              label="Subject Initials"
              size="small"
              isFullWidth
              disabled
            />
            {/* <div style={{ marginTop: "2rem" }}>
            </div> */}
            <SelectElement
              label="Gender"
              helperText=""
              value={selectGenderState}
              onChange={handleChangeGender}
              placeholder="select"
              isFullWidth
              isRequired={true}
              size="small"
              menuItems={genderMenuItems}
            />

            <DatePickerElement
              label="ECG Recording Date:"
              helperText=""
              isFullWidth
              size="small"
              dateFormat="DD-MMM-YYYY"
              placeholder="dd-mmm-yyyy"
            />
            {/* <div style={{ marginTop: "-1.85rem" }}>
            </div> */}
            <TimePickerElement
              label="ECG Recording time:"
              helperText=""
              isFullWidth
              size="small"
            />
          </Grid>
          <div>
            <Typography variant="caption" marginLeft={2}>
              Note: Enter * to list all the subject IDs and visit IDs.
            </Typography>
          </div>
        </Grid>
        <div
          style={{
            display: "flex",
            backgroundColor: "#f8f9fb",
            padding: "0.75rem",
            alignItems: "center",
          }}
        >
          <div style={{ width: "60rem" }}>
            <FileUpload
              label="Upload ECG File :"
              required
              fullWidth
              value={value}
              onUpload={handleUpload}
              onFileDelete={handleDelete}
              className={style.fileUploader}
            />
          </div>
          <div style={{ marginLeft: "5rem", marginTop: "0.5rem" }}>
            <Button variant="tertiary">Upload</Button>
          </div>
        </div>
        <div style={{ backgroundColor: "#f8f9fb" }}>
          <Table
            columns={uploadedColumns}
            rows={uploadedRows}
            hidePagination
            title="List of files uploaded"
            emptyProps={{
              text: <>No records find to display.</>,
            }}
          />
        </div>
        <div style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
          <Button variant="tertiary">Export list to CSV File</Button>
        </div>
      </Card>
    </>
  );
};

export default SiteDeviceComponent;
