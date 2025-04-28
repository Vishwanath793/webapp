import React, { FC, useState } from "react";
import Tab from "apollo-react/components/Tab";
import Tabs from "apollo-react/components/Tabs";
import Typography from "apollo-react/components/Typography";
import ECGPage from "./ECGPage";
import DCFPage from "./DCFPage";
import SearchOptionsGrid from "../../common/SearchOptionsGrid";
import Card from "apollo-react/components/Card";
import SiteDetailsPage from "./SiteDetailsPage";
import Link from "apollo-react/components/Link";
import Grid from "apollo-react/components/Grid";
import ProtocolDetailsPage from "./ProtocolDetailsPage";
import SearchHeader from "../searchHeader";

const TabsComponent: FC = () => {
  const [value, setValue] = useState<number>(2);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const handleSearchClick = () => {
    setIsSearchClicked(!isSearchClicked);
  };

  const handleChangeTab = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    setValue(newValue);
  };
  return (
    <>
      {value === 0 && (
        <div>
          <Typography variant="body1" emphasis="high">
            Protocol Details
          </Typography>
          <SearchHeader />
        </div>
      )}
      {value === 1 && (
        <div>
          <Typography variant="body1" emphasis="high">
            Site Details
          </Typography>
          <SearchHeader />
        </div>
      )}
      {value === 2 && (
        <div>
          <Typography variant="body1" emphasis="high">
            ECG Details
          </Typography>
          <SearchHeader />
        </div>
      )}
      {value === 3 && (
        <div>
          <Typography variant="body1" emphasis="high">
            DCF Details
          </Typography>
          <SearchHeader />
        </div>
      )}
      <Tabs
        value={value}
        size="small"
        onChange={handleChangeTab}
        truncate
        shape="box"
      >
        <Tab label="Protocol Details" />
        <Tab label="Project Site Details" />
        <Tab label="ECG Details" />
        <Tab label="DCF Details" />
      </Tabs>
      <div style={{ padding: 24 }}>
        {value === 0 && (
          <div
            style={{
              marginTop: "-1.5rem",
              marginLeft: "-1.5rem",
              marginRight: "-1.5rem",
            }}
          >
            <ProtocolDetailsPage />
          </div>
        )}
        {value === 1 && (
          <div
            style={{
              marginTop: "-1.5rem",
              marginLeft: "-1.5rem",
              marginRight: "-1.5rem",
            }}
          >
            <Typography variant="body1" emphasis="high">
              Search Options
            </Typography>
            <SearchOptionsGrid searchClick={handleSearchClick} />
            <SiteDetailsPage />
          </div>
        )}
        {value === 2 && (
          <div
            style={{
              marginTop: "-1.5rem",
              marginLeft: "-1.5rem",
              marginRight: "-1.5rem",
            }}
          >
            <Typography variant="body1" emphasis="high">
              Search Options
            </Typography>
            <SearchOptionsGrid searchClick={handleSearchClick} />
            <div style={{ display: "flex", marginTop: "2rem" }}>
              <Typography style={{ marginTop: "1rem" }} variant="caption">
                Icon Legend:
              </Typography>
              <img src={require("./../../common/icons/icon_report.png")}></img>
              <Typography style={{ marginTop: "1rem" }} variant="caption">
                ECG Report
              </Typography>
              <img src={require("./../../common/icons/icon_Dreport.png")}></img>
              <Typography style={{ marginTop: "1rem" }} variant="caption">
                DCF Report
              </Typography>
              <img
                src={require("./../../common/icons/icon_waveform.png")}
              ></img>
              <Typography style={{ marginTop: "1rem" }} variant="caption">
                ECG Waveform
              </Typography>
              <img
                src={require("./../../common/icons/icon_preliminaryreport.png")}
              ></img>
              <Typography style={{ marginTop: "1rem" }} variant="caption">
                Prelimnary ECG Report
              </Typography>

              <Typography
                variant="caption"
                style={{ marginLeft: "4rem", marginTop: "1rem" }}
              >
                Grid Options:
              </Typography>
              <img src={require("./../../common/icons/icon_prnt.png")}></img>
              <Typography style={{ marginTop: "1rem" }} variant="caption">
                PRINT
              </Typography>
              <img src={require("./../../common/icons/icon_pdf.png")}></img>
              <Typography style={{ marginTop: "1rem" }} variant="caption">
                PDF
              </Typography>
              <img src={require("./../../common/icons/icon_excel.png")}></img>
              <Typography style={{ marginTop: "1rem" }} variant="caption">
                EXCEL
              </Typography>
              <img src={require("./../../common/icons/icon_word.png")}></img>
              <Typography style={{ marginTop: "1rem" }} variant="caption">
                WORD
              </Typography>
            </div>
            <Card style={{ marginTop: "0.5rem" }}>
              <ECGPage />
            </Card>
          </div>
        )}
        {value === 3 && (
          <div
            style={{
              marginTop: "-1.5rem",
              marginLeft: "-1.5rem",
              marginRight: "-1.5rem",
            }}
          >
            <Typography variant="body1" emphasis="high">
              Search Options
            </Typography>
            <SearchOptionsGrid searchClick={handleSearchClick} />
            <Card style={{ marginTop: "2rem" }}>
              <DCFPage />
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default TabsComponent;
