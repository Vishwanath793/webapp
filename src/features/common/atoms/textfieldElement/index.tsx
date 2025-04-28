import React, { FC } from "react";

import TextField from "apollo-react/components/TextField";
import Styles from "./textFieldElement.module.scss";

interface TextfieldProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  defaultValue?: string;
  isError?: boolean;
  size: "small" | "medium";
  isFullWidth?: boolean;
  isRequired?: boolean;
  disabled?: boolean;
}

const TextfieldElement: FC<TextfieldProps> = ({
  label,
  placeholder = "help",
  helperText = "",
  defaultValue,
  isError = false,
  size,
  disabled = false,
  isFullWidth,
  isRequired,
}) => {
  return (
    <div className={Styles.textfieldElement}>
      <TextField
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        defaultValue={defaultValue}
        error={isError}
        size={size}
        fullWidth={isFullWidth}
        required={isRequired}
        disabled={disabled}
      />
    </div>
  );
};

export default TextfieldElement;
