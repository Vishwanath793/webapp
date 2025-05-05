import Link from "apollo-react/components/Link";
import Typography from "apollo-react/components/Typography";
export const rowsEcgs: Array<{
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

export const rowsDcfs: Array<{
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

export const rowsProjectSitesOutstanding: Array<{
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

export const rowsECGInterpretation: Array<{
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

export const rowsProjectSites: Array<{
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
