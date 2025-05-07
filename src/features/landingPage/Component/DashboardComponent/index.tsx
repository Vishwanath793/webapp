import React, { useState, FC, useEffect } from "react";
import LineChart from "apollo-react/components/LineChart";
import MenuItem from "apollo-react/components/MenuItem";
import Select from "apollo-react/components/Select";
import Card from "apollo-react/components/Card";
import BarChart from "apollo-react/components/BarChart";
import Accordion from "apollo-react/components/Accordion";
import AccordionDetails from "apollo-react/components/AccordionDetails";
import AccordionSummary from "apollo-react/components/AccordionSummary";
import Typography from "apollo-react/components/Typography";
import Table, { Column } from "apollo-react/components/Table";
import Link from "apollo-react/components/Link";
import ResponsiveHorizontalBarChart from "../BarChartMain/BarChartMain";
import ListChart from "apollo-react/components/ListChart";
import style from "./dashboardComponentStyle.module.scss";
import {
  DataTransferData,
  columnECGInterpretation,
  columns,
  columnsDCFsOutstanding,
  columnsDcfs,
  columnsProjectSites,
  columnsProjectSitesOutstanding,
  dataLineChart,
  dataTransferColumn,
  dcfData,
  ecgData,
  ecgInterpretationData,
  outstandingDCFsData,
  projectSiteData,
  projectSiteMaxOutstandingDCFsData,
  rowsDataTransfer,
  rowsOutstandingdcfs,
  summaryRows,
  summarycolumns,
} from "./Dashboardmock";
import {
  rowsDcfs,
  rowsECGInterpretation,
  rowsEcgs,
  rowsProjectSites,
  rowsProjectSitesOutstanding,
} from "./mock";
import SelectElement from "../../../../features/common/atoms/selectElement/index";

// import SelectElement from "src/features/common/atoms/selectElement";

//interfaces of all components

const DashboardComponent: FC = () => {
  const [selectState, setSelectState] = useState("");
  const [isScreenDown, setIsScreenDown] = useState(false);

  const protocolNumberMenuItems = [
    { value: "1", name: "10051060_RV" },
    { value: "2", name: "10053090" },
    { value: "3", name: "10073010" },
    { value: "4", name: "10053090_RV" },
  ];

  const handleChange = (e: any) => {
    setSelectState(e.target.value);
  };

  return (
    <>
      <Card
        style={{ padding: "0.75rem", marginTop: "4.2rem" }}
        interactive={false}
      >
        <Typography
          variant="subtitle"
          gutterBottom
          emphasis="high"
          style={{ marginBottom: ".5rem", marginLeft: "0.1rem" }}
        >
          My DashBoard
        </Typography>
        <Card className={style.charts}>
          <div className={style.protonum}>
            <SelectElement
              label="Select Protocol Number"
              helperText="ECG Recieved / DCF Raised"
              menuItems={protocolNumberMenuItems}
              value={selectState}
              onChange={handleChange}
              placeholder="Select Protocol Number"
              isFullWidth={false}
              isRequired={false}
              size="small"
            />
          </div>
          <div className={style.screenStyle}>
            <div className={style.linechart}>
              <Typography variant="bodySmall" emphasis="high">
                This Graph displays both the ECG recieved and DCF raised over
                the last 12 months of period
              </Typography>
              <LineChart
                data={dataLineChart}
                yRange={[0, 1400]}
                xTicks={5}
                height={250}
              />
            </div>
            <div className={style.tasksummary}>
              <ListChart
                columns={summarycolumns}
                rows={summaryRows}
                height={320}
              />
            </div>
            <div style={{ clear: "both" }}></div> {/* Clears floats */}
          </div>
        </Card>
        <div className={style.screenCards} id="conbtain">
          <Card className={style.leftCards} id="conbtain1">
            <Accordion defaultExpanded size="small">
              <AccordionSummary>
                <Typography>ECG Status</Typography>
                <Typography className={style.statusText}>
                  This Graph displays the ECG status for a protocol.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div id="ECGStatus" style={{ backgroundColor: "#f8f9fb" }}>
                  <div
                    style={{
                      padding: "0.1rem",
                      maxWidth: "500px",
                      margin: "0 auto",
                    }}
                  >
                    <ResponsiveHorizontalBarChart
                      data={ecgData}
                      xaxis="No. of ECGs"
                    />
                  </div>
                </div>

                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Table
                    columns={columns}
                    rows={rowsEcgs}
                    hidePagination
                    className={style.table}
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion size="small">
              <AccordionSummary>
                <Typography variant="bodySmall" emphasis="high">
                  DCFs Outstanding
                </Typography>
                <Typography className={style.statusText}>
                  This Graph displays the no. of days DCFs Outstanding for a
                  protocol.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  id="DCFsOutstanding"
                  style={{ backgroundColor: "#f8f9fb" }}
                >
                  <ResponsiveHorizontalBarChart
                    data={outstandingDCFsData}
                    xaxis=""
                  />
                </div>
                <div style={{ backgroundColor: "#f8f9fb", height: "auto" }}>
                  <Table
                    columns={columnsDCFsOutstanding}
                    rows={rowsOutstandingdcfs}
                    hidePagination
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion size="small">
              <AccordionSummary>
                <Typography variant="bodySmall" emphasis="high">
                  Project Sites with maximum DCFs Raised
                </Typography>
                <Typography className={style.statusText}>
                  This Graph displays the Top 5 Project Sites with maximum DCFs
                  Raised.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  id="ProjectSiteswithmaximumDCFsRaised"
                  style={{ backgroundColor: "#f8f9fb" }}
                >
                  <ResponsiveHorizontalBarChart
                    data={projectSiteData}
                    xaxis="No. of DFCs"
                  />
                </div>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Table
                    columns={columnsProjectSites}
                    rows={rowsProjectSites}
                    hidePagination
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          </Card>
          <Card className={style.rightCards} id="conbtainR">
            <Accordion defaultExpanded size="small">
              <AccordionSummary>
                <Typography>DCF Status</Typography>
                <Typography className={style.statusText}>
                  This Graph displays the DCF status of the Report
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div id="DCF Status" style={{ backgroundColor: "#f8f9fb" }}>
                  <div
                    style={{
                      padding: "0.1rem",
                      maxWidth: "500px",
                      margin: "0 auto",
                    }}
                  >
                    <ResponsiveHorizontalBarChart
                      data={dcfData}
                      xaxis="No. of DFCs"
                    />
                  </div>
                </div>
                <div style={{ backgroundColor: "#f8f9fb", height: "178px" }}>
                  <Table columns={columnsDcfs} rows={rowsDcfs} hidePagination />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion size="small">
              <AccordionSummary>
                <Typography variant="bodySmall" emphasis="high">
                  Project Sites with maximum outstanding DCFs
                </Typography>
                <Typography className={style.statusText}>
                  This Graph displays top 5 Project sites with maximum
                  Outstanding DCFs
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  id="outstandingDCFs"
                  style={{ backgroundColor: "#f8f9fb" }}
                >
                  <div
                    style={{
                      padding: "0.1rem",
                      maxWidth: "500px",
                      margin: "0 auto",
                    }}
                  >
                    <ResponsiveHorizontalBarChart
                      data={projectSiteMaxOutstandingDCFsData}
                      xaxis="No. of DFCs"
                    />
                  </div>
                </div>
                <div style={{ backgroundColor: "#f8f9fb", height: "178px" }}>
                  <Table
                    columns={columnsProjectSitesOutstanding}
                    rows={rowsProjectSitesOutstanding}
                    hidePagination
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion size="small">
              <AccordionSummary>
                <Typography variant="bodySmall" emphasis="high">
                  Overall ECG Interpretation
                </Typography>
                <Typography className={style.statusText}>
                  This Graph displays ECGs for various interpretation categories
                  for the protocol.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  id="OverallECGInterpretation"
                  style={{ backgroundColor: "#f8f9fb" }}
                >
                  <div
                    style={{
                      padding: "0.1rem",
                      maxWidth: "500px",
                      margin: "0 auto",
                    }}
                  >
                    <ResponsiveHorizontalBarChart
                      data={ecgInterpretationData}
                      xaxis="No. of ECGs"
                    />
                  </div>
                </div>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Table
                    columns={columnECGInterpretation}
                    rows={rowsECGInterpretation}
                    hidePagination
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography variant="bodySmall" emphasis="high">
                  No. of Data Transfers
                </Typography>
                <Typography
                  className={style.statusText}
                  id="No. of Data Transfers
"
                >
                  This Graph displays the no. of data transfers over last 12
                  months for the protocol.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  id="NoofDataTransfers"
                  style={{ backgroundColor: "#f8f9fb" }}
                >
                  <div
                    style={{
                      padding: "0.1rem",
                      maxWidth: "500px",
                      margin: "0 auto",
                    }}
                  >
                    <ResponsiveHorizontalBarChart
                      data={DataTransferData}
                      xaxis=""
                    />
                  </div>
                </div>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Table
                    columns={dataTransferColumn}
                    rows={rowsDataTransfer}
                    hidePagination
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          </Card>
        </div>
      </Card>
    </>
  );
};

export default DashboardComponent;
