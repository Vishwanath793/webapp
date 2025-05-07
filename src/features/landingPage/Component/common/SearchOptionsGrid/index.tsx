import Button from "apollo-react/components/Button";
import DatePicker from "apollo-react/components/DatePicker";
import Grid from "apollo-react/components/Grid";
import MenuItem from "apollo-react/components/MenuItem";
import Select from "apollo-react/components/Select";
import TextField from "apollo-react/components/TextField";
import React, { useState } from "react";
import styles from "./searchOptionsStyle.module.scss";
import Card from "apollo-react/components/Card";
import SelectElement from "../../../../common/atoms/selectElement/index";
import TextfieldElement from "../../../../common/atoms/textfieldElement/index";
import DatePickerElement from "../../../../common/atoms/datePickerElement/index";
import TimePickerElement from "../../../../common/atoms/timePickerElement/index";

interface SearchOptionsGridProps {
  searchClick: any;
}
const SearchOptionsGrid: React.FC<SearchOptionsGridProps> = ({
  searchClick,
}) => {
  const [selectStateNum, setSelectStateNum] = useState("");
  const [selectStateId, setSelectStateId] = useState("");
  const [selectStateSubId, setSelectStateSubId] = useState("");
  const [selectStateVisitId, setSelectStateVisitId] = useState("");
  const [selectStateInterpret, setSelectStateIntepret] = useState("");
  const [selectStateDCF, setSelectStateDCF] = useState("");
  const [selectStateDays, setSelectStateDays] = useState("");

  const handleChangeNumber = (e: any) => {
    setSelectStateNum(e.target.value);
  };
  const handleChangeId = (e: any) => {
    setSelectStateId(e.target.value);
  };
  const handleChangeSubId = (e: any) => {
    setSelectStateSubId(e.target.value);
  };
  const handleChangeVisitId = (e: any) => {
    setSelectStateVisitId(e.target.value);
  };
  const handleChangeInterpret = (e: any) => {
    setSelectStateIntepret(e.target.value);
  };
  const handleChangeDCFType = (e: any) => {
    setSelectStateDCF(e.target.value);
  };
  const handleChangeDays = (e: any) => {
    setSelectStateDays(e.target.value);
  };

  const selectProtocolNumberValue = [
    { value: "ESCRIBETEST", name: "ESCRIBETEST" },
    { value: "1447-0005", name: "1447-0005" },
    { value: "20160323", name: "20160323" },
    { value: "BN42358", name: "BN42358" },
    { value: "BN42358", name: "BN42358" },
    { value: "BP41315", name: "BP41315" },
    { value: "BP44382", name: "BP44382" },
    { value: "10051060_RV", name: "10051060_RV" },
    { value: "10053090", name: "10053090" },
    { value: "10053090_RV", name: "10053090_RV" },
  ];
  const siteIdMenuItem = [{ value: "01", name: "01" }];
  const subjectIdMenuItems = [
    { value: "101", name: "101" },
    { value: "102", name: "102" },
    { value: "103", name: "103" },
    { value: "104", name: "104" },
    { value: "105", name: "105" },
    { value: "106", name: "106" },
    { value: "107", name: "107" },
    { value: "108", name: "108" },
    { value: "109", name: "109" },
    { value: "110", name: "110" },
    { value: "111", name: "111" },
    { value: "112", name: "112" },
    { value: "201", name: "201" },
    { value: "202", name: "202" },
  ];
  const visitIdMenuItems = [
    { value: "P1D1PD1HR", name: "P1D1PD1HR" },
    { value: "P1D1PD24HR", name: "P1D1PD24HR" },
    { value: "P1D1PD2HR", name: "P1D1PD2HR" },
    { value: "P1D1PD4HR", name: "P1D1PD4HR" },
    { value: "P1D1PD6HR", name: "P1D1PD6HR" },
    { value: "P1D1PD8HR", name: "P1D1PD8HR" },
    { value: "P2D1PD0.5HR", name: "P2D1PD0.5HR" },
  ];

  const overAllInterpretationMenuItems = [
    { value: "Abnormal_Insignificant", name: "Abnormal_Insignificant" },
    { value: "Abnormal_Significant", name: "Abnormal_Significant" },
    { value: "Normal", name: "Normal" },
    { value: "Incomplete_Analsis", name: "Incomplete_Analsis" },
    { value: "AbNormal", name: "AbNormal" },
    { value: "Others", name: "Others" },
    { value: "UnInterpretable", name: "UnInterpretable" },
  ];

  const dcfTypeMenuItems = [
    { value: "All", name: "All" },
    { value: "Resolved", name: "Resolved" },
    { value: "Outstanding", name: "Outstanding" },
  ];

  const outstandingDaysMenuItems = [
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "7", name: "7" },
  ];
  return (
    <Card style={{ marginTop: "0.5rem", padding: "0.25rem" }}>
      <Grid container spacing={1} columnGap={1}>
        <Grid
          item
          xs={3.5}
          style={{
            backgroundColor: "rgb(249 249 249)",
            paddingRight: "0.5rem",
          }}
        >
          <SelectElement
            label="Select Protocol Number"
            placeholder="Select"
            value={selectStateNum}
            onChange={handleChangeNumber}
            size="small"
            isFullWidth
            menuItems={selectProtocolNumberValue}
          />
          <SelectElement
            menuItems={siteIdMenuItem}
            label="Project Site ID"
            placeholder="Select"
            value={selectStateId}
            onChange={handleChangeId}
            size="small"
            isFullWidth
          />
          <SelectElement
            label="Subject ID"
            placeholder="Select"
            value={selectStateSubId}
            onChange={handleChangeSubId}
            size="small"
            isFullWidth
            menuItems={subjectIdMenuItems}
          />
          <SelectElement
            label="Visit ID"
            placeholder="Select"
            value={selectStateVisitId}
            onChange={handleChangeVisitId}
            size="small"
            menuItems={visitIdMenuItems}
            isFullWidth
          />
        </Grid>
        <Grid
          item
          xs={3.5}
          style={{
            backgroundColor: "rgb(249 249 249)",
            paddingRight: "0.5rem",
          }}
        >
          <TextfieldElement label="ECG ID" size="small" isFullWidth />
          <SelectElement
            label="Overall Interpretation"
            placeholder="Select"
            value={selectStateInterpret}
            onChange={handleChangeInterpret}
            size="small"
            isFullWidth
            menuItems={overAllInterpretationMenuItems}
          />
          <DatePickerElement
            label="ECG Recording Start Date:"
            isFullWidth
            size="small"
          />
          {/* <div className={styles.datePicker}></div> */}
          <TextfieldElement
            label="ECG Recording Start Time:"
            size="small"
            isFullWidth
          />
          <DatePickerElement
            label="ECG Recording End Date:"
            isFullWidth
            size="small"
          />
          {/* <div className={styles.datePicker}></div> */}
          <TextfieldElement
            label="ECG Recording Start Time:"
            size="small"
            isFullWidth
            // className={styles.common}
          />
        </Grid>
        <Grid
          item
          xs={3.5}
          style={{
            backgroundColor: "rgb(249 249 249)",
            paddingRight: "0.5rem",
          }}
        >
          <TextfieldElement label="DCF ID:" size="small" isFullWidth />
          <SelectElement
            label="DCF Type"
            placeholder=""
            value={selectStateDCF}
            onChange={handleChangeDCFType}
            size="small"
            isFullWidth
            menuItems={dcfTypeMenuItems}
          />

          <SelectElement
            label="Outstanding Days"
            placeholder="Select"
            value={selectStateDays}
            onChange={handleChangeDays}
            disabled
            isFullWidth
            size="small"
            menuItems={outstandingDaysMenuItems}
          />

          <DatePickerElement
            label="DCF Issued Start Date:"
            isFullWidth
            size="small"
          />
          {/* <div className={styles.datePicker}></div> */}
          <TextfieldElement
            label="DCF Issue Start Time"
            size="small"
            isFullWidth
          />
          <DatePickerElement
            label="DCF Issue End Date:"
            isFullWidth
            size="small"
          />
          {/* <div className={styles.datePicker}>
          </div> */}
          <TextfieldElement
            label="DCF Issue End Time"
            size="small"
            isFullWidth
          />
        </Grid>
      </Grid>
      <div className={styles.Search}>
        <Button variant="tertiary" onClick={searchClick}>
          Search
        </Button>
      </div>
    </Card>
  );
};

export default SearchOptionsGrid;
