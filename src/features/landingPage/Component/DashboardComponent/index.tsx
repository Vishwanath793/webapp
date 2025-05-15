import React, { useState, FC, useEffect } from "react";
import Card from "apollo-react/components/Card";
import Accordion from "apollo-react/components/Accordion";
import AccordionDetails from "apollo-react/components/AccordionDetails";
import AccordionSummary from "apollo-react/components/AccordionSummary";
import Typography from "apollo-react/components/Typography";
import Table, { Column } from "apollo-react/components/Table";
import ResponsiveHorizontalBarChart from "../BarChartMain/BarChartMain";
import ListChart from "apollo-react/components/ListChart";
import "./dashboardComponentStyle.scss";
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
import LineChart, { ChartData } from "./LineChart";
import { useDispatch } from "react-redux";

// import SelectElement from "src/features/common/atoms/selectElement";

//interfaces of all components

const DashboardComponent: FC = () => {
  const [selectState, setSelectState] = useState("");
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    ecgStatus: true,
    dcfsOutstanding: false,
    projectSites: false,
    dcfStatus: true,
    maxOutstandingDCF: false,
    ecgInterpretation: false,
    noOfDataTransfers: false,
  });

  const handleAccordionChange = (accordionKey: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [accordionKey]: !prevExpanded[accordionKey],
    }));
  };
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
      <Card className="dashBoard" interactive={false}>
        <Typography
          variant="subtitle"
          gutterBottom
          emphasis="high"
          className="summary"
          style={{ marginBottom: ".5rem", marginLeft: "0.1rem" }}
        >
          My DashBoard
        </Typography>
        <Card className="charts">
          <div className="protonum">
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
          <div className="screenStyle">
            <div className="linechart">
              <Typography emphasis="low" fontSize=".9rem">
                This graph displays both ECG Received and DCF Raised over last
                12 months for a Protocol.
              </Typography>
              {/* <LineChart
                data={dataLineChart}
                yRange={[0, 1400]}
                xTicks={5}
                height={250}
              /> */}
              <LineChart
                data={dataLineChart as unknown as ChartData[]}
                xTicks={5}
              />
            </div>
            <div className="tasksummary">
              <Typography
                emphasis="low"
                style={{ visibility: "hidden" }}
                fontSize=".9rem"
              >
                This
              </Typography>
              <ListChart
                columns={summarycolumns}
                rows={summaryRows}
                height={320}
              />
            </div>
            <div style={{ clear: "both" }}></div> {/* Clears floats */}
          </div>
        </Card>
        <div className="screenCards" id="conbtain">
          <Card className="accordianCards" id="conbtain1">
            <div style={{ marginBottom: "16px" }}>
              <Accordion
                defaultExpanded={expanded.ecgStatus}
                size="small"
                onChange={() => handleAccordionChange("ecgStatus")}
              >
                <AccordionSummary>
                  <Typography emphasis="high" className="summary">
                    ECG Status
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="statusText">
                    This Graph displays the ECG status for a protocol.
                  </Typography>
                  <div id="ECGStatus" className="chart-background">
                    <div
                      style={{
                        padding: "0.1rem",
                        maxWidth: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <ResponsiveHorizontalBarChart
                        data={ecgData}
                        xaxis="No. of ECGs"
                      />
                    </div>
                  </div>

                  <div className="table-margin">
                    <Table
                      columns={columns}
                      rows={rowsEcgs}
                      hidePagination
                      defaultRowsPerPage={"All"}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Typography
                className="statusText"
                style={{ display: expanded.ecgStatus ? "none" : "block" }}
              >
                This Graph displays the ECG status for a protocol.
              </Typography>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <Accordion
                size="small"
                onChange={() => handleAccordionChange("dcfsOutstanding")}
              >
                <AccordionSummary>
                  <Typography emphasis="high" className="summary">
                    DCFs Outstanding
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="statusText">
                    This Graph displays the no. of days DCFs Outstanding for a
                    protocol.
                  </Typography>
                  <div id="DCFsOutstanding" className="chart-background">
                    <ResponsiveHorizontalBarChart
                      data={outstandingDCFsData}
                      xaxis=""
                    />
                  </div>
                  <div className="table-margin">
                    <Table
                      columns={columnsDCFsOutstanding}
                      rows={rowsOutstandingdcfs}
                      hidePagination
                      defaultRowsPerPage={"All"}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Typography
                className="statusText"
                style={{ display: expanded.dcfsOutstanding ? "none" : "block" }}
              >
                This Graph displays the no. of days DCFs Outstanding for a
                protocol.
              </Typography>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <Accordion
                size="small"
                onChange={() => handleAccordionChange("projectSites")}
              >
                <AccordionSummary>
                  <Typography emphasis="high" className="summary">
                    Project Sites with maximum DCFs Raised
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="statusText">
                    This Graph displays the Top 5 Project Sites with maximum
                    DCFs Raised.
                  </Typography>
                  <div
                    id="ProjectSiteswithmaximumDCFsRaised"
                    className="chart-background"
                  >
                    <ResponsiveHorizontalBarChart
                      data={projectSiteData}
                      xaxis="No. of DFCs"
                    />
                  </div>
                  <div className="table-margin">
                    <Table
                      columns={columnsProjectSites}
                      rows={rowsProjectSites}
                      hidePagination
                      defaultRowsPerPage={"All"}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Typography
                className="statusText"
                style={{ display: expanded.projectSites ? "none" : "block" }}
              >
                This Graph displays the Top 5 Project Sites with maximum DCFs
                Raised.
              </Typography>
            </div>
          </Card>
          <Card className="accordianCards" id="conbtainR">
            <div style={{ marginBottom: "16px" }}>
              <Accordion
                defaultExpanded
                size="small"
                onChange={() => handleAccordionChange("dcfStatus")}
              >
                <AccordionSummary>
                  <Typography emphasis="high" className="summary">
                    DCF Status
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="statusText">
                    This Graph displays the DCF status of the Report
                  </Typography>
                  <div id="DCF Status" className="chart-background">
                    <div
                      style={{
                        padding: "0.1rem",
                        maxWidth: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <ResponsiveHorizontalBarChart
                        data={dcfData}
                        xaxis="No. of DFCs"
                      />
                    </div>
                  </div>
                  <div className="table-margin">
                    <Table
                      columns={columnsDcfs}
                      rows={rowsDcfs}
                      hidePagination
                      defaultRowsPerPage={"All"}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Typography
                className="statusText"
                style={{ display: expanded.dcfStatus ? "none" : "block" }}
              >
                This Graph displays the DCF status of the Report
              </Typography>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <Accordion
                size="small"
                onChange={() => handleAccordionChange("maxOutstandingDCF")}
              >
                <AccordionSummary>
                  <Typography emphasis="high" className="summary">
                    Project Sites with maximum outstanding DCFs
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="statusText">
                    This Graph displays top 5 Project sites with maximum
                    Outstanding DCFs
                  </Typography>
                  <div id="outstandingDCFs" className="chart-background">
                    <div
                      style={{
                        padding: "0.1rem",
                        maxWidth: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <ResponsiveHorizontalBarChart
                        data={projectSiteMaxOutstandingDCFsData}
                        xaxis="No. of DFCs"
                      />
                    </div>
                  </div>
                  <div className="table-margin">
                    <Table
                      columns={columnsProjectSitesOutstanding}
                      rows={rowsProjectSitesOutstanding}
                      hidePagination
                      defaultRowsPerPage={"All"}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Typography
                className="statusText"
                style={{
                  display: expanded.maxOutstandingDCF ? "none" : "block",
                }}
              >
                This Graph displays top 5 Project sites with maximum Outstanding
                DCFs
              </Typography>
            </div>
            <div
              style={{ marginBottom: "16px" }}
              onChange={() => handleAccordionChange("ecgInterpretation")}
            >
              <Accordion size="small">
                <AccordionSummary>
                  <Typography emphasis="high" className="summary">
                    Overall ECG Interpretation
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="statusText">
                    This Graph displays ECGs for various interpretation
                    categories for the protocol.
                  </Typography>
                  <div
                    id="OverallECGInterpretation"
                    className="chart-background"
                  >
                    <div
                      style={{
                        padding: "0.1rem",
                        maxWidth: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <ResponsiveHorizontalBarChart
                        data={ecgInterpretationData}
                        xaxis="No. of ECGs"
                      />
                    </div>
                  </div>
                  <div className="table-margin">
                    <Table
                      columns={columnECGInterpretation}
                      rows={rowsECGInterpretation}
                      hidePagination
                      defaultRowsPerPage={"All"}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Typography
                className="statusText"
                style={{
                  display: expanded.ecgInterpretation ? "none" : "block",
                }}
              >
                This Graph displays ECGs for various interpretation categories
                for the protocol.
              </Typography>
            </div>
            <div
              style={{ marginBottom: "16px" }}
              onChange={() => handleAccordionChange("noOfDataTransfers")}
            >
              <Accordion>
                <AccordionSummary>
                  <Typography emphasis="high" className="summary">
                    No. of Data Transfers
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className="statusText"
                    id="No. of Data Transfers
"
                  >
                    This Graph displays the no. of data transfers over last 12
                    months for the protocol.
                  </Typography>
                  <div id="NoofDataTransfers" className="chart-background">
                    <div
                      style={{
                        padding: "0.1rem",
                        maxWidth: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <ResponsiveHorizontalBarChart
                        data={DataTransferData}
                        xaxis=""
                      />
                    </div>
                  </div>
                  <div className="table-margin">
                    <Table
                      columns={dataTransferColumn}
                      rows={rowsDataTransfer}
                      hidePagination
                      defaultRowsPerPage={"All"}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Typography
                className="statusText"
                style={{
                  display: expanded.noOfDataTransfers ? "none" : "block",
                }}
              >
                This Graph displays the no. of data transfers over last 12
                months for the protocol.
              </Typography>
            </div>
          </Card>
        </div>
      </Card>
    </>
  );
};

export default DashboardComponent;
