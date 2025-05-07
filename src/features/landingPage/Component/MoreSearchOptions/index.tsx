import Typography from "apollo-react/components/Typography";
import React, { FC, useState } from "react";
import TabsComponent from "./TabsComponent";
import Card from "apollo-react/components/Card";
import SearchOptionsGrid from "../common/SearchOptionsGrid";
import Link from "apollo-react/components/Link";
import styles from "./moreSearchOptions.module.scss";

const MoreSearchOptions: FC = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };
  return (
    <Card style={{ marginTop: "5rem", padding: "0.75rem" }}>
      {!isSearchClicked ? (
        <>
          <Typography variant="body2">ECG</Typography>
          <Typography variant="body2" emphasis="high">
            More Search Options
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography variant="body2">
              You Searched for Protocol Number:
            </Typography>
            <div
              style={{
                display: "flex",
                width: "75%",
                justifyContent: "end",
                marginTop: "-2.5rem",
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
                  <Link size="small" className={styles.link}>
                    0
                  </Link>
                </Typography>
                <Typography variant="caption">
                  Total DCFs:
                  <Link size="small" className={styles.link}>
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
                  <Link size="small" className={styles.link}>
                    0
                  </Link>
                </Typography>
                <Typography variant="caption">
                  DCFs Resolved:
                  <Link size="small" className={styles.link}>
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
                  ECGs Pending:
                  <Link className={styles.link} size="small">
                    0
                  </Link>
                </Typography>
                <Typography variant="caption">
                  DCFs Pending:
                  <Link size="small" className={styles.link}>
                    0
                  </Link>
                </Typography>
              </div>
            </div>
          </div>
          <SearchOptionsGrid searchClick={handleSearchClick} />
        </>
      ) : (
        <>
          <TabsComponent />
        </>
      )}
    </Card>
  );
};

export default MoreSearchOptions;
