import Table, { Column } from "apollo-react/components/Table";
import React, { FC } from "react";
import FilePdf from "apollo-react-icons/FilePdf";
import { ImageList } from "@mui/material";
import Typography from "apollo-react/components/Typography";
import styles from "../DetailsPage.module.scss";
import Card from "apollo-react/components/Card";
const columns: Column[] = [
  {
    header: "SI#",
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
    fixedWidth: true,
    width: 100,
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
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 2,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 3,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 1,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 1,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 1,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 1,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 1,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 1,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 1,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 1,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
  {
    si: 1,
    reports: (
      <>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_report.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_Dreport.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_waveform.png")}
        ></img>
        <img
          style={{ marginLeft: ".2rem" }}
          src={require("../../../common/icons/icon_preliminaryreport.png")}
        ></img>
      </>
    ),
    pendingdcfs: "No",
    recording: "	21-JUL-2009 16:27:07",
    gender: "Male",
    dateofbirth: "08/05/1991",
    subjectid: "1001",
    projectsiteid: "	001",
    protocolnumber: "	691612",
    id: "	ESCRIBETEST",
  },
];
const ECGPage: FC = () => {
  return (
    <Card
      className={styles.DetailsPage}
      interactive={false}
      style={{ marginTop: "1rem" }}
    >
      <Table columns={columns} rows={rowsEcgs} />
    </Card>
  );
};

export default ECGPage;
