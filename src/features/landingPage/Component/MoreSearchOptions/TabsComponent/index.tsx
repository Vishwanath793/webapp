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
import {
  setTabValue,
  tabValueState,
} from "../../../../../features/landingPage/slice/landingPageSlice";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "apollo-react/components/Accordion";
import AccordionSummary from "apollo-react/components/AccordionSummary";
import { AccordionDetails } from "@mui/material";
import "./TabsComponent.scss";
const TabsComponent: FC = () => {
  const dispatch = useDispatch();
  const tabValue = useSelector(tabValueState);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [expanded, setExpanded] = useState<boolean>(true);
  const handleSearchClick = () => {
    setIsSearchClicked(!isSearchClicked);
  };
  console.log("tabValueState", tabValue);
  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const handleChangeTab = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    dispatch(setTabValue(newValue));
  };
  return (
    <>
      {tabValue === 0 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" emphasis="high">
            Protocol Details
          </Typography>
          <SearchHeader />
        </div>
      )}
      {tabValue === 1 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" emphasis="high">
            Site Details
          </Typography>
          <SearchHeader />
        </div>
      )}
      {tabValue === 2 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" emphasis="high">
            ECG Details
          </Typography>
          <SearchHeader />
        </div>
      )}
      {tabValue === 3 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" emphasis="high">
            DCF Details
          </Typography>
          <SearchHeader />
        </div>
      )}
      <Tabs
        value={tabValue}
        size="small"
        onChange={handleChangeTab}
        truncate
        shape="box"
      >
        <Tab
          label="Protocol Details"
          style={{ height: "2rem", minHeight: "2rem" }}
        />
        <Tab
          label="Project Site Details"
          style={{ height: "2rem", minHeight: "2rem" }}
        />
        <Tab
          label="ECG Details"
          style={{ height: "2rem", minHeight: "2rem" }}
        />
        <Tab
          label="DCF Details"
          style={{ height: "2rem", minHeight: "2rem" }}
        />
      </Tabs>
      <div style={{ padding: 24 }}>
        {tabValue === 0 && (
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
        {tabValue === 1 && (
          <div className="Accordion-moresearch">
            <Accordion
              expanded={expanded}
              onChange={handleAccordionChange}
              size="small"
              className="accordionDetail"
            >
              <AccordionSummary>
                <Typography
                  variant="body1"
                  emphasis="high"
                  sx={{ marginTop: ".5rem" }}
                >
                  {expanded ? "Search Options" : "Closed"}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SearchOptionsGrid />
              </AccordionDetails>
            </Accordion>
            <SiteDetailsPage />
          </div>
        )}
        {tabValue === 2 && (
          <div
            style={{
              marginTop: "-1.5rem",
              marginLeft: "-1.5rem",
              marginRight: "-1.5rem",
            }}
          >
            <Typography
              variant="body1"
              emphasis="high"
              sx={{ marginTop: ".5rem" }}
            >
              Search Options
            </Typography>
            <SearchOptionsGrid />
            <div
              style={{ display: "flex", flexWrap: "wrap", marginTop: "2rem" }}
            >
              {/* Icon Legend Section */}
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Typography variant="caption">Icon Legend:</Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Vertically centers the content
                      justifyContent: "center", // Horizontally centers the content
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={require("./../../common/icons/icon_report.png")}
                      style={{
                        width: "1.35rem",
                        height: "1.35rem",
                        objectFit: "cover",
                      }}
                      alt="ECG Report"
                    />
                    <Typography
                      variant="caption"
                      sx={{ marginLeft: "0.15rem" }}
                    >
                      ECG Report
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Vertically centers the content
                      justifyContent: "center", // Horizontally centers the content
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={require("./../../common/icons/icon_Dreport.png")}
                      style={{
                        width: "1.35rem",
                        height: "1.35rem",
                        objectFit: "cover",
                      }}
                      alt="DCF Report"
                    />
                    <Typography
                      variant="caption"
                      sx={{ marginLeft: "0.15rem" }}
                    >
                      DCF Report
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Vertically centers the content
                      justifyContent: "center", // Horizontally centers the content
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={require("./../../common/icons/icon_waveform.png")}
                      style={{
                        width: "1.35rem",
                        height: "1.35rem",
                        objectFit: "cover",
                      }}
                      alt="ECG Waveform"
                    />
                    <Typography
                      variant="caption"
                      sx={{ marginLeft: "0.15rem" }}
                    >
                      ECG Waveform
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Vertically centers the content
                      justifyContent: "center", // Horizontally centers the content
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={require("./../../common/icons/icon_preliminaryreport.png")}
                      style={{
                        width: "1.35rem",
                        height: "1.35rem",
                        objectFit: "cover",
                      }}
                      alt="Preliminary ECG Report"
                    />
                    <Typography
                      variant="caption"
                      sx={{ marginLeft: "0.15rem" }}
                    >
                      Preliminary ECG Report
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Grid Options Section */}
              <div style={{ marginLeft: "auto" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Typography variant="caption">Grid Options:</Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Vertically centers the content
                      justifyContent: "center", // Horizontally centers the content
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={require("./../../common/icons/icon_prnt.png")}
                      style={{
                        width: "1.35rem",
                        height: "1.35rem",
                        objectFit: "cover",
                      }}
                      alt="PRINT"
                    />
                    <Typography
                      variant="caption"
                      sx={{ marginLeft: "0.15rem" }}
                    >
                      PRINT
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Vertically centers the content
                      justifyContent: "center", // Horizontally centers the content
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={require("./../../common/icons/icon_pdf.png")}
                      style={{
                        width: "1.35rem",
                        height: "1.35rem",
                        objectFit: "cover",
                      }}
                      alt="PDF"
                    />
                    <Typography
                      variant="caption"
                      sx={{ marginLeft: "0.15rem" }}
                    >
                      PDF
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Vertically centers the content
                      justifyContent: "center", // Horizontally centers the content
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={require("./../../common/icons/icon_excel.png")}
                      style={{
                        width: "1.35rem",
                        height: "1.35rem",
                        objectFit: "cover",
                      }}
                      alt="EXCEL"
                    />
                    <Typography
                      variant="caption"
                      sx={{ marginLeft: "0.15rem" }}
                    >
                      EXCEL
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Vertically centers the content
                      justifyContent: "center", // Horizontally centers the content
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={require("./../../common/icons/icon_word.png")}
                      style={{
                        width: "1.35rem",
                        height: "1.35rem",
                        objectFit: "cover",
                      }}
                    ></img>
                    <Typography
                      variant="caption"
                      sx={{ marginLeft: "0.15rem" }}
                    >
                      WORD
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <Card style={{ marginTop: "0.5rem" }}>
              <ECGPage />
            </Card>
          </div>
        )}
        {tabValue === 3 && (
          <div
            style={{
              marginTop: "-1.5rem",
              marginLeft: "-1.5rem",
              marginRight: "-1.5rem",
            }}
          >
            <Typography
              variant="body1"
              emphasis="high"
              sx={{ marginTop: ".5rem" }}
            >
              Search Options
            </Typography>
            <SearchOptionsGrid />
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
