import { Column } from "apollo-react/components/Table";
interface ChartDataPoint {
  x: string;
  y: number | undefined;
}

interface ChartData {
  label: string | React.ReactNode;
  data: ChartDataPoint[];
}
interface taskColumn {
  header: string;
  accessor: string;
  align?: string;
}

export const summarycolumns: taskColumn[] = [
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

export const summaryRows: Array<{
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

export const columns: Column[] = [
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

export const columnsDcfs: Column[] = [
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

export const columnsProjectSites: Column[] = [
  {
    header: "Task Summarry",
    accessor: "tasksummary",
  },
  {
    header: "No. of DCFs",
    accessor: "noofdcfs",
  },
];

export const columnsProjectSitesOutstanding: Column[] = [
  {
    header: "Task Summarry",
    accessor: "tasksummary",
  },
  {
    header: "No. of DCFs",
    accessor: "noofdcfs",
  },
];

export const columnsDCFsOutstanding: Column[] = [
  {
    header: "Task Summary",
    accessor: "tasksummary",
  },
  {
    header: "",
    accessor: "outstandingdcfs",
  },
];

export const columnECGInterpretation: Column[] = [
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

export const dataTransferColumn: Column[] = [
  {
    header: "Task Summarry",
    accessor: "tasksummary",
  },
  {
    header: "",
    accessor: "datatransfer",
  },
];

export const rowsDataTransfer: Array<{
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

export const rowsOutstandingdcfs: Array<{
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
interface DataPoint {
  country: string;
  yield: number;
}
export const ecgData: DataPoint[] = [
  { country: "EREC", yield: 766 },
  { country: "EPDC", yield: 3 },
  { country: "EANL", yield: 695 },
];

export const dcfData: DataPoint[] = [
  { country: "DRAS", yield: 154 },
  { country: "DRES", yield: 151 },
  { country: "DOST", yield: 3 },
];

export const projectSiteMaxOutstandingDCFsData: DataPoint[] = [
  { country: "201", yield: 3 },
];

export const projectSiteData: DataPoint[] = [
  { country: "201", yield: 92 },
  { country: "301", yield: 34 },
  { country: "450", yield: 10 },
  { country: "203", yield: 9 },
  { country: "202", yield: 8 },
];

export const DataTransferData: DataPoint[] = [
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

export const outstandingDCFsData: DataPoint[] = [
  { country: ">20 Days", yield: 3 },
  { country: "16-20 Days", yield: 0 },
  { country: "11-15 Days", yield: 0 },
  { country: "6-10 Days", yield: 0 },
  { country: "<5 Days", yield: 0 },
];

export const ecgInterpretationData: DataPoint[] = [
  { country: "NOR", yield: 902 },
  { country: "ABN", yield: 298 },
];

export const dataLineChart: ChartData[] = [
  {
    label: "ECGs",
    data: [
      { x: "Jun", y: 0 },
      { x: "Jul", y: 0 },
      { x: "Aug", y: 0 },
      { x: "Sep", y: 0 },
      { x: "Oct", y: 1 },
      { x: "Nov", y: 60 },
      { x: "Dec", y: 0 },
      { x: "Jan", y: 3 },
      { x: "Feb", y: 5 },
      { x: "Mar", y: 10 },
    ],
  },
  {
    label: "DCFs",
    data: [
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
      { x: "Apr", y: 3 },
      { x: "May", y: 0 },
    ],
  },
];
