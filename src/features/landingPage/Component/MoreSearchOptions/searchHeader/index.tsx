import Link from "apollo-react/components/Link";
import Typography from "apollo-react/components/Typography";
import styles from "./SearchHeader.module.scss";
import {
  setTabValue,
  tabValueState,
} from "../../../../../features/landingPage/slice/landingPageSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { FC } from "react";

const SearchHeader: FC = () => {
  const dispatch = useDispatch();
  const tabValue = useSelector(tabValueState);
  const handleChangeTab = (newValue: number): void => {
    dispatch(setTabValue(newValue));
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginBottom: ".5rem" }}>
      <Typography variant="body2">
        You Searched for Protocol Number:
        <Link size="small" className={styles.link}>
          10051060_RV
        </Link>
      </Typography>
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "end",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "4rem",
          }}
        >
          <Typography variant="caption">
            Total ECGs:
            <Link
              size="small"
              className={styles.link}
              onClick={() => handleChangeTab(2)}
            >
              1234
            </Link>
          </Typography>
          <Typography variant="caption">
            Total DCFs:
            <Link
              size="small"
              className={styles.link}
              onClick={() => handleChangeTab(3)}
            >
              0
            </Link>
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "4rem",
          }}
        >
          <Typography variant="caption">
            ECGs Analysed:
            <Link
              size="small"
              className={styles.link}
              onClick={() => handleChangeTab(2)}
            >
              1200
            </Link>
          </Typography>
          <Typography variant="caption">
            DCFs Resolved:
            <Link
              size="small"
              className={styles.link}
              onClick={() => handleChangeTab(3)}
            >
              0
            </Link>
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "2rem",
          }}
        >
          <Typography variant="caption">
            ECGs Pending:
            <Link
              size="small"
              className={styles.link}
              onClick={() => handleChangeTab(2)}
            >
              0
            </Link>
          </Typography>
          <Typography variant="caption">
            DCFs Pending:
            <Link
              size="small"
              className={styles.link}
              onClick={() => handleChangeTab(3)}
            >
              0
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
