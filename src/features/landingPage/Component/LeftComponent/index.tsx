import withStyles, { WithStyles } from "@mui/styles/withStyles";
import React, { Component, FC, useState } from "react";
import { NavLink } from "react-router-dom";

import Blade from "apollo-react/components/Blade";
import Button from "apollo-react/components/Button";
import ButtonGroup from "apollo-react/components/ButtonGroup";
import Typography from "apollo-react/components/Typography";
import Link from "apollo-react/components/Link";
import style from "../LeftComponent/sidebarStyle.module.scss";
import Select from "apollo-react/components/Select";
import MenuItem from "apollo-react/components/MenuItem";
import Search from "apollo-react/components/Search";
import Box from "apollo-react/components/Box";
import CONSTANTS from "../../../../constants/appRoutes";
import { useDispatch } from "react-redux";
import { isFluxStandardAction } from "@reduxjs/toolkit";

interface LeftComponentProps {
  menuNavItems: MenuNavItem[];
  searchNavItems: SearchNavItem[];
  reportsNavItems: ReportsNavItem[];
  isDisplay: boolean;
  isBladeOpen: boolean;
  handleBladeOpen: (e: any) => void;
}
interface BladeLeftState {
  open: boolean;
  expanded: boolean;
}

interface MenuNavItem {
  navText: string;
  path: string;
  className?: string;
  child: any;
}
interface SearchNavItem {
  navText: string;
  path: string;
  className?: string;
  child: any;
}

interface ReportsNavItem {
  navText: string;
  path: string;
  className?: string;
  child: any;
}

const LeftComponent: FC<LeftComponentProps> = ({
  menuNavItems,
  searchNavItems,
  reportsNavItems,
  isDisplay,
  isBladeOpen,
  handleBladeOpen,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={style.blade}>
        <Blade
          side="left"
          open={true}
          expanded={isBladeOpen}
          onChange={handleBladeOpen}
          hasBackdrop={false}
          hideCloseButton
          width={310}
          marginTop={39}
        >
          <div>
            <div className={style.myLinks}>
              <Typography
                variant="bodyDefault"
                darkMode
                className={style.marginpt5rem}
              >
                My Links
              </Typography>
              <div style={{ marginLeft: "1rem" }}>
                {menuNavItems &&
                  menuNavItems.map((item) => {
                    return (
                      <NavLink
                        key={item.navText}
                        className={item.className}
                        to={item.path}
                        data-testid={`leftmenunav_` + item.navText}
                      >
                        {item.child}
                      </NavLink>
                    );
                  })}
              </div>
            </div>
            <div className={style.search}>
              <Typography
                variant="bodyDefault"
                darkMode
                className={style.marginpt5rem}
              >
                Search
              </Typography>
              <Select
                className={style.searchProtocol}
                label={
                  <Typography variant="body2" darkMode>
                    Search by Protocol number
                  </Typography>
                }
                helperText=""
                value={value}
                onChange={handleChange}
                placeholder="Select item..."
                size="small"
                fullWidth
              >
                <MenuItem value="1">{"10051060_RV"}</MenuItem>
                <MenuItem value="2">{"10053090"}</MenuItem>
                <MenuItem value="3">{"10053090_RV"}</MenuItem>
              </Select>
              <Search
                className={style.searchDCF}
                placeholder="Search"
                size="small"
                label={
                  <Typography variant="body2" darkMode>
                    {"Search by DCF ID:"}
                  </Typography>
                }
                fullWidth
              />
              <Search
                className={style.searchDCF}
                placeholder="Search"
                size="small"
                label={
                  <Typography variant="body2" darkMode>
                    {"Search by ECG ID:"}
                  </Typography>
                }
                fullWidth
              />
              <Button
                variant="primary"
                size="small"
                style={{ marginRight: 10 }}
              >
                Search
              </Button>
              {searchNavItems &&
                searchNavItems.map((item) => {
                  return (
                    <NavLink
                      key={item.navText}
                      className={item.className}
                      to={item.path}
                    >
                      {item.child}
                    </NavLink>
                  );
                })}
            </div>
            <div className={style.reports}>
              <Typography variant="bodyDefault" darkMode>
                Reports
              </Typography>
              <div style={{ marginLeft: "1rem" }}>
                {reportsNavItems &&
                  reportsNavItems.map((item) => {
                    return (
                      <NavLink
                        key={item.navText}
                        className={item.className}
                        to={item.path}
                      >
                        {item.child}
                      </NavLink>
                    );
                  })}
              </div>
              <Select
                label={
                  <Typography variant="body2" darkMode>
                    Protocol Reports
                  </Typography>
                }
                value={value}
                onChange={handleChange}
                placeholder="Select item..."
                size="small"
                fullWidth
              >
                <MenuItem value="1">{"Protocol-wise ECG listing"}</MenuItem>
                <MenuItem value="2">{"DCF Metrics"}</MenuItem>
                <MenuItem value="3">{"Significant ECG Listing"}</MenuItem>
                <MenuItem value="4">
                  {"Protocol ECG Listing with Parameters and Interpretation"}
                </MenuItem>
                <MenuItem value="5">
                  {"Uploaded ECG list for Site owned device"}
                </MenuItem>
                <MenuItem value="6">{"Missed Visit Tracking"}</MenuItem>
                <MenuItem value="7">{"DCF Reporting"}</MenuItem>
                <MenuItem value="8">{"Safety Reports"}</MenuItem>
                <MenuItem value="9">
                  {"ECG Parameter Mean Value Report"}
                </MenuItem>
              </Select>
              <Button
                variant="primary"
                size="small"
                style={{ marginRight: 10 }}
              >
                Go
              </Button>
            </div>
          </div>
        </Blade>
      </div>
    </>
  );
};
export default LeftComponent;
