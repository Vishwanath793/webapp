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
import ListChart from "apollo-react/components/ListChart";
import style from "./dashboardComponentStyle.module.scss";
import TypographyElement from "../../../common/atoms/typographyElement/index";
//interfaces of all components
interface ChartDataPoint {
  x: string;
  y: number | undefined;
}

interface ChartData {
  label: string;
  data: ChartDataPoint[];
}

// interface taskSummaryRow {
//   country: string;
//   value: number;
// }

interface taskColumn {
  header: string;
  accessor: string;
  align?: string;
}

const summarycolumns: taskColumn[] = [
  {
    header: "Task Summary:",
    accessor: "task",
  },
  {
    header: "",
    accessor: "value",
    align: "right",
  },
];

// const summaryRows: taskSummaryRow[] = [];

const summaryRows: Array<{
  task: string;
  value: any;
}> = [
  {
    task: "Protocol Name",
    value: 10053090,
  },
  {
    task: "Number of Project Sites",
    value: 1,
  },
  {
    task: "Number of Subjects enrolled",
    value: 36,
  },
  {
    task: "First ECG recieved",
    value: "06-NOV-2024 08:30:49",
  },
  {
    task: "Last ECG recieved",
    value: "31-JAN-2025 09:00:29",
  },
];

const columns: Column[] = [
  {
    header: "*Legend Key",
    accessor: "legendkey",
  },
  {
    header: "Task Summary",
    accessor: "tasksummary",
  },
  {
    header: "No. of ECGs",
    accessor: "noofecgs",
  },
];

const rowsEcgs: Array<{
  legendkey: string;
  tasksummary: any;
  noofecgs: number;
}> = [
  {
    legendkey: "EANL",
    tasksummary: (
      <div>
        <Link size="small" href="/EANL_Link">
          ECGs Analyzed and Reported
        </Link>
      </div>
    ),
    noofecgs: 695,
  },
  {
    legendkey: "EPDC",
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          ECGs Pending Data Clarification
        </Link>
      </div>
    ),
    noofecgs: 3,
  },
  {
    legendkey: "EREC",
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          ECGs Received
        </Link>
      </div>
    ),
    noofecgs: 766,
  },

  {
    legendkey: "",
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          Number of Project Sites
        </Link>
      </div>
    ),
    noofecgs: 8,
  },
  {
    legendkey: "",
    tasksummary: (
      <div>
        <Typography variant="body2">
          Estimated number of ECGs for the Study
        </Typography>
      </div>
    ),
    noofecgs: 3026,
  },
];
const columnsDcfs: Column[] = [
  {
    header: "*Legend Key",
    accessor: "legendkey",
  },
  {
    header: "Task Summarry",
    accessor: "tasksummary",
  },
  {
    header: "No. of DCFs",
    accessor: "noofdcfs",
  },
];

const rowsDcfs: Array<{
  legendkey: string;
  tasksummary: any;
  noofdcfs: number;
}> = [
  {
    legendkey: "DOST",
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          DCFs Outstanding
        </Link>
      </div>
    ),
    noofdcfs: 3,
  },
  {
    legendkey: "DRES",
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          DCFs Resolved
        </Link>
      </div>
    ),
    noofdcfs: 151,
  },
  {
    legendkey: "DRAS",
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          DCFs Raised
        </Link>
      </div>
    ),
    noofdcfs: 154,
  },
  {
    legendkey: "",
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          Number of Project Sites
        </Link>
      </div>
    ),
    noofdcfs: 8,
  },
];

const columnsProjectSites: Column[] = [
  {
    header: "Task Summarry",
    accessor: "tasksummary",
  },
  {
    header: "No. of DCFs",
    accessor: "noofdcfs",
  },
];

const columnsProjectSitesOutstanding: Column[] = [
  {
    header: "Task Summarry",
    accessor: "tasksummary",
  },
  {
    header: "No. of DCFs",
    accessor: "noofdcfs",
  },
];

const rowsProjectSitesOutstanding: Array<{
  tasksummary: any;
  noofdcfs: number;
}> = [
  {
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          {" DCFs Outstanding(Total)"}
        </Link>
      </div>
    ),
    noofdcfs: 3,
  },
  {
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          {" 202*"}
        </Link>
      </div>
    ),
    noofdcfs: 3,
  },
];

const columnsDCFsOutstanding: Column[] = [
  {
    header: "Task Summary",
    accessor: "tasksummary",
  },
  {
    header: "",
    accessor: "outstandingdcfs",
  },
];

const columnECGInterpretation: Column[] = [
  {
    header: "Legend",
    accessor: "legendkey",
  },
  {
    header: "Task Summarry",
    accessor: "tasksummary",
  },
  {
    header: "No. of ECGs",
    accessor: "noofecgs",
  },
];

const rowsECGInterpretation: Array<{
  legendkey: string;
  tasksummary: any;
  noofecgs: number;
}> = [
  {
    legendkey: "NOR",
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          Normal
        </Link>
      </div>
    ),
    noofecgs: 902,
  },
  {
    legendkey: "ABN",
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          Abnormal
        </Link>
      </div>
    ),
    noofecgs: 298,
  },
];

const dataTransferColumn: Column[] = [
  {
    header: "Task Summarry",
    accessor: "tasksummary",
  },
  {
    header: "",
    accessor: "datatransfer",
  },
];

const rowsDataTransfer: Array<{
  tasksummary: any;
  datatransfer: number;
}> = [
  {
    tasksummary: "Number of data Transfers(Total)",
    datatransfer: 6,
  },
  {
    tasksummary: "Jan",
    datatransfer: 1,
  },
  {
    tasksummary: "Feb",
    datatransfer: 1,
  },
  {
    tasksummary: "Mar",
    datatransfer: 0,
  },
  {
    tasksummary: "Apr",
    datatransfer: 0,
  },
  {
    tasksummary: "May",
    datatransfer: 1,
  },
  {
    tasksummary: "Jun",
    datatransfer: 0,
  },
  {
    tasksummary: "Jul",
    datatransfer: 0,
  },
  {
    tasksummary: "Aug",
    datatransfer: 0,
  },
  {
    tasksummary: "Sep",
    datatransfer: 0,
  },
  {
    tasksummary: "Oct",
    datatransfer: 0,
  },
  {
    tasksummary: "nov",
    datatransfer: 0,
  },
  {
    tasksummary: "Dec",
    datatransfer: 1,
  },
];

const rowsOutstandingdcfs: Array<{
  tasksummary: string;
  outstandingdcfs: string;
}> = [
  {
    tasksummary: "Number of Project Sites",
    outstandingdcfs: "8",
  },
  {
    tasksummary: "DCFs Raised (Total)",
    outstandingdcfs: "3",
  },
  {
    tasksummary: "<5 Days",
    outstandingdcfs: "0",
  },
  {
    tasksummary: "6-10 Days",
    outstandingdcfs: "0",
  },
  {
    tasksummary: "11-15 Days",
    outstandingdcfs: "0",
  },
  {
    tasksummary: "16-20 Days",
    outstandingdcfs: "0",
  },
  {
    tasksummary: ">20 Days",
    outstandingdcfs: "3",
  },
];

const rowsProjectSites: Array<{
  tasksummary: any;
  noofdcfs: number;
}> = [
  {
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          {" DCFs Outstanding(Total)"}
        </Link>
      </div>
    ),
    noofdcfs: 154,
  },
  {
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          {" 201*"}
        </Link>
      </div>
    ),
    noofdcfs: 92,
  },
  {
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          {" 301*"}
        </Link>
      </div>
    ),
    noofdcfs: 34,
  },
  {
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          {"450*"}
        </Link>
      </div>
    ),
    noofdcfs: 10,
  },
  {
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          {"203*"}
        </Link>
      </div>
    ),
    noofdcfs: 9,
  },
  {
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          {"202*"}
        </Link>
      </div>
    ),
    noofdcfs: 6,
  },
  {
    tasksummary: (
      <div>
        <Link size="small" href="#/Navigation?id=link">
          {"450*"}
        </Link>
      </div>
    ),
    noofdcfs: 10,
  },
];
const DashboardComponent: FC = () => {
  const [selectState, setSelectState] = useState("");
  const [isScreenDown, setIsScreenDown] = useState(false);

  const dataLineChart: ChartData[] = [
    {
      label: "ECGs",
      data: [
        { x: "", y: 0 },
        { x: "Apr", y: 0 },
        { x: "May", y: 0 },
        { x: "Jun", y: 0 },
        { x: "Jul", y: 0 },
        { x: "Aug", y: 0 },
        { x: "Sep", y: 0 },
        { x: "Oct", y: 0 },
        { x: "Nov", y: 1200 },
        { x: "Dec", y: 1200 },
        { x: "Jan", y: 100 },
        { x: "Feb", y: 0 },
        { x: "Mar", y: 0 },
      ],
    },
    {
      label: "DCFs",
      data: [
        { x: "", y: 0 },
        { x: "Apr", y: 0 },
        { x: "May", y: 0 },
        { x: "Jun", y: 0 },
        { x: "Jul", y: 0 },
        { x: "Aug", y: 0 },
        { x: "Sep", y: 0 },
        { x: "Oct", y: 0 },
        { x: "Nov", y: 0 },
        { x: "Dec", y: 0 },
        { x: "Jan", y: 0 },
        { x: "Feb", y: 0 },
        { x: "Mar", y: 0 },
      ],
    },
  ];

  const handleChange = (e: any) => {
    setSelectState(e.target.value);
  };

  const ecgData = [
    { country: "EREC", yield: 766 },
    { country: "EPDC", yield: 3 },
    { country: "EANL", yield: 695 },
  ];

  const dcfData = [
    { country: "DRAS", yield: 154 },
    { country: "DRES", yield: 151 },
    { country: "DOST", yield: 3 },
  ];

  const projectSiteMaxOutstandingDCFsData = [{ country: "201", yield: 3 }];

  const projectSiteData = [
    { country: "201", yield: 92 },
    { country: "301", yield: 34 },
    { country: "450", yield: 10 },
    { country: "203", yield: 9 },
    { country: "202", yield: 8 },
  ];

  const DataTransferData = [
    { country: "Jan", yield: 1 },
    { country: "Feb", yield: 1 },
    { country: "Mar", yield: 0 },
    { country: "Apr", yield: 0 },
    { country: "May", yield: 1 },
    { country: "Jun", yield: 0 },
    { country: "Jul", yield: 0 },
    { country: "Aug", yield: 0 },
    { country: "Sep", yield: 0 },
    { country: "Oct", yield: 0 },
    { country: "Nov", yield: 0 },
    { country: "Dec", yield: 1 },
  ];

  const outstandingDCFsData = [
    { country: ">20 Days", yield: 3 },
    { country: "16-20 Days", yield: 0 },
    { country: "11-15 Days", yield: 0 },
    { country: "6-10 Days", yield: 0 },
    { country: "<5 Days", yield: 0 },
  ];

  const ecgInterpretationData = [
    { country: "NOR", yield: 902 },
    { country: "ABN", yield: 298 },
  ];
  useEffect(() => {
    const handleResize = () => {
      console.log("window size" + window.innerWidth);

      if (window.innerWidth < 768) {
        setIsScreenDown(true);
      }
      if (window.innerWidth > 768) {
        setIsScreenDown(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          style={{ marginBottom: "-1rem" }}
        >
          My DashBoard
        </Typography>
        <Select
          label="Select Protocol Number"
          helperText="ECG Recieved / DCF Raised"
          value={selectState}
          onChange={handleChange}
          placeholder="You can select one option"
        >
          <MenuItem value="1">{"10051060_RV"}</MenuItem>
          <MenuItem value="2">{"10053090"}</MenuItem>
          <MenuItem value="3">{"10073010"}</MenuItem>
          <MenuItem value="4">{"10053090_RV"}</MenuItem>
        </Select>
        <div style={{ display: "flex" }}>
          <div style={{ backgroundColor: "#f8f9fb", width: 420 }}>
            <Typography>
              This Graph displays both the ECG recieved and DCF raised over the
              last 12 months of period
            </Typography>
            <LineChart
              data={dataLineChart}
              yRange={[0, 1400]}
              height={250}
              width={420}
            />
          </div>
          <div
            style={{
              padding: "0.5rem",
              height: "20rem",
              width: "30rem",
            }}
          >
            <ListChart
              columns={summarycolumns}
              rows={summaryRows}
              height={360}
            />
          </div>
        </div>

        <div className={isScreenDown ? style.screenDown : style.screenSide}>
          <div style={{ padding: "1rem" }}>
            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography>ECG Status</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Typography sx={{ marginBottom: 4 }} variant="bodyDefault">
                    This Graph displays the ECG status of the Report
                  </Typography>

                  <BarChart data={ecgData} width={350} height={300} />
                </div>

                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Table columns={columns} rows={rowsEcgs} hidePagination />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography>DCFs Outstanding</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Typography sx={{ marginBottom: 4 }} variant="bodyDefault">
                    This Graph displays the no. of days DCFs Outstanding for a
                    protocol.
                  </Typography>
                  <BarChart
                    data={outstandingDCFsData}
                    width={350}
                    height={300}
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
            <Accordion>
              <AccordionSummary>
                <Typography>Project Sites with maximum DCFs Raised</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Typography sx={{ marginBottom: 4 }} variant="bodyDefault">
                    This Graph displays the Top 5 Project Sites with maximum
                    DCFs Raised.
                  </Typography>
                  <BarChart data={projectSiteData} width={350} height={300} />
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
          </div>
          <div style={{ padding: "1rem" }}>
            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography>DCF Status</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Typography sx={{ marginBottom: 4 }} variant="bodyDefault">
                    This Graph displays the DCF status of the Report
                  </Typography>
                  <BarChart data={dcfData} width={350} height={300} />
                </div>
                <div style={{ backgroundColor: "#f8f9fb", height: "232px" }}>
                  <Table columns={columnsDcfs} rows={rowsDcfs} hidePagination />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography>
                  Project Sites with maximum outstanding DCFs
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Typography sx={{ marginBottom: 4 }} variant="bodyDefault">
                    This Graph displays top 5 Project sites with maximum
                    Outstanding DCFs
                  </Typography>
                  <BarChart
                    data={projectSiteMaxOutstandingDCFsData}
                    width={350}
                    height={200}
                  />
                </div>
                <div style={{ backgroundColor: "#f8f9fb", height: "232px" }}>
                  <Table
                    columns={columnsProjectSitesOutstanding}
                    rows={rowsProjectSitesOutstanding}
                    hidePagination
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography>Overall ECG Interpretation</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Typography sx={{ marginBottom: 4 }} variant="bodyDefault">
                    This Graph displays ECGs for various interpretation
                    categories for the protocol.
                  </Typography>
                  <BarChart
                    data={ecgInterpretationData}
                    width={350}
                    height={300}
                  />
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
                <Typography>No. of Data Transfers</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ backgroundColor: "#f8f9fb" }}>
                  <Typography sx={{ marginBottom: 4 }} variant="bodyDefault">
                    This Graph displays the no. of data transfers over last 12
                    months for the protocol.
                  </Typography>
                  <BarChart data={DataTransferData} width={350} height={500} />
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
          </div>
        </div>
      </Card>
    </>
  );
};

export default DashboardComponent;
