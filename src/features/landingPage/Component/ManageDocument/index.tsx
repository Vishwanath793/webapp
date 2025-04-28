import Button from "apollo-react/components/Button";
import Card from "apollo-react/components/Card";
import FileUpload from "apollo-react/components/FileUpload";
import MenuItem from "apollo-react/components/MenuItem";
import Select from "apollo-react/components/Select";
import TextField from "apollo-react/components/TextField";
import Typography from "apollo-react/components/Typography";
import React, { FC, useState } from "react";
import SelectElement from "../../../common/atoms/selectElement/index";

const ManageDocument: FC = () => {
  const menuItemsProtocol = [
    {
      value: "1",
      name: "ESCRIBETEST",
    },
    {
      value: "2",
      name: "1447-0005",
    },
    {
      value: "3",
      name: "20160323",
    },
    {
      value: "4",
      name: "	BN42358",
    },
    {
      value: "5",
      name: "BP41315",
    },
    {
      value: "6",
      name: "	BP44382",
    },
  ];
  const [selectState, setSelectState] = useState("");

  const [value, setValue] = useState<File[]>([]);

  const handleChange = (e: any) => {
    setSelectState(e.target.value);
  };

  const handleUpload = (newValue: File[]) => {
    setValue((prevValue) => [...prevValue, ...newValue]);
  };

  const handleDelete = (file: File) => {
    setValue((prevValue) =>
      prevValue.filter((item) => item.name !== file.name)
    );
  };
  return (
    <>
      <Card
        style={{
          padding: "0.75rem",
          marginTop: "4.2rem",
        }}
        interactive={false}
      >
        <Typography>My Links</Typography>
        <Typography emphasis="high">
          Search Document Repository on the Web
        </Typography>
        <Card
          style={{
            padding: "0.75rem",
            marginTop: "4.2rem",
          }}
          interactive={false}
        >
          <Typography emphasis="high">All Fields Required</Typography>
          <SelectElement
            label="Protocol Number:*"
            helperText=""
            value={selectState}
            onChange={handleChange}
            placeholder="select"
            isFullWidth={true}
            menuItems={menuItemsProtocol}
          />
          <SelectElement
            label="Project Site ID:*"
            helperText=""
            value={selectState}
            onChange={handleChange}
            placeholder="select"
            isFullWidth={true}
            menuItems={menuItemsProtocol}
          />
          <SelectElement
            label="Document Type:*"
            helperText=""
            value={selectState}
            onChange={handleChange}
            placeholder="select"
            isFullWidth={true}
            menuItems={menuItemsProtocol}
          />

          <FileUpload
            label="Upload ECG File :"
            required
            fullWidth
            value={value}
            onUpload={handleUpload}
            onFileDelete={handleDelete}
            // className={style.fileUploader}
          />
          <TextField
            label="Comments*:"
            placeholder="Placeholder"
            helperText="This is a note about the field"
            multiline
            fullWidth
            minRows="3"
          />
          <Button variant="tertiary">Attach File</Button>
          <Button variant="tertiary">Upload File</Button>

          <Button variant="tertiary">{"Delete Selected File(s)"}</Button>
        </Card>
      </Card>
    </>
  );
};

export default ManageDocument;
