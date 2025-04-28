import Divider from "apollo-react/components/Divider";
import Button from "apollo-react/components/Button";
import Grid from "apollo-react/components/Grid";
import TextField from "apollo-react/components/TextField";
import Typography from "apollo-react/components/Typography";
import React, { useState } from "react";

function ProtocolDetailsPage() {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };
  return (
    <>
      <div style={{ marginLeft: "91.5%" }}>
        <Button variant="tertiary" onClick={handleSearchClick}>
          Print
        </Button>
      </div>
      <Grid container spacing={1} style={{ display: "flex" }}>
        <Grid style={{ display: "flex", flexDirection: "column" }} item xs={6}>
          <Typography variant="caption" emphasis="high">
            Protocol Details:
          </Typography>
          <Divider />
          <div
            style={{
              marginTop: "0.5rem",
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Protocol Number:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">10051060_RV</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Study Type:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">Digital Study</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Study Phase:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">Phase 1</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Parent Protocol Number:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption"></Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Start Date:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">02-OCT-2020</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              End Date:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">06-JAN-2021</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Study Duration:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">96</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Sponsor Name:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">
              Taiho Pharmaceutical Co. Ltd
            </Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Therapeutic Indication:
            </Typography>
          </div>
          <TextField
            placeholder="OTHER- Not applicable"
            sizeAdjustable
            minHeight={180}
          />
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              ECG Acquisition Device:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">M12R Holter</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Protocol Design:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">
              This study is a single centre, sing...
            </Typography>
          </div>
          <Typography variant="caption" emphasis="high">
            Outstanding DCF Report Details:
          </Typography>
          <Divider />
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              DCF Reminder Timeline:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption"></Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              DCF Reminder Frequency:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption"></Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Total Number of Reminders:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption"></Typography>
          </div>
          <Typography variant="caption" emphasis="high">
            QTc
          </Typography>
          <Divider />
          <div
            style={{
              marginTop: "0.5rem",
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              QTcB
            </Typography>
          </div>
          <div>
            <Typography variant="caption">No</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              QTcL
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">No</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              QTcF
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">Yes</Typography>
          </div>
        </Grid>
        <Grid style={{ display: "flex", flexDirection: "column" }} item xs={6}>
          <Typography variant="caption" emphasis="high">
            Time Line Parameters
          </Typography>
          <Divider />
          <div
            style={{
              background: "#f8f9fb",
              padding: 2,
            }}
          >
            <Typography variant="caption" emphasis="high">
              Baseline ECG Timeline:
            </Typography>
          </div>
          <div
            style={{
              padding: 2,
            }}
          >
            <Typography variant="caption">1 Months</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Follow-Up ECG Timeline:
            </Typography>
          </div>
          <div
            style={{
              padding: 2,
            }}
          >
            <Typography variant="caption">1 Months</Typography>
          </div>
          <Typography variant="caption" emphasis="high">
            QECG PM Details
          </Typography>
          <Divider />
          <div
            style={{
              marginTop: "0.5rem",
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Name:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">Dimple Gusain</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Phone Number:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">9-173-38677673</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Email Address:
            </Typography>
          </div>
          <Typography variant="caption" emphasis="high">
            Sponsor PM Details
          </Typography>
          <Divider />
          <div
            style={{
              marginTop: "0.5rem",
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Name:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">Nana Uemura</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Phone Number:
            </Typography>
          </div>
          <div>
            <Typography variant="caption" emphasis="high">
              Email Address:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">n-uemura@taiho.co.jp</Typography>
          </div>
          <Typography variant="caption" emphasis="high">
            Global PM Details
          </Typography>
          <Divider />
          <div style={{ marginTop: "0.5rem", background: "#f8f9fb" }}>
            <Typography variant="caption" emphasis="high">
              Name:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption"></Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Phone Number:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption"></Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              Email Address:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption"></Typography>
          </div>
          <Typography variant="caption" emphasis="high">
            QT Dispersion
          </Typography>
          <Divider />
          <div
            style={{
              marginTop: "0.5rem",
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              QTd:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">No</Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              QTcBd:
            </Typography>
          </div>
          <div
            style={{
              background: "#f8f9fb",
            }}
          ></div>
          <Typography variant="caption">No</Typography>
          <div
            style={{
              background: "#f8f9fb",
            }}
          >
            <Typography variant="caption" emphasis="high">
              QTcFd:
            </Typography>
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <Typography variant="caption">No</Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ProtocolDetailsPage;
