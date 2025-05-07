import Link from "apollo-react/components/Link";
import Typography from "apollo-react/components/Typography";
import styles from "./SearchHeader.module.scss";
import React, { FC } from "react";

const SearchHeader: FC = () => {
  return (
    <div style={{ display: "flex", width: "80rem" }}>
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
            <Link size="small" className={styles.link}>
              1234
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
              1200
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
            marginRight: "2rem",
          }}
        >
          <Typography variant="caption">
            ECGs Pending:
            <Link size="small" className={styles.link}>
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
  );
};

export default SearchHeader;
