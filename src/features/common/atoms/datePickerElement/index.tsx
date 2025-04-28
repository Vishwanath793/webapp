import React, { FC } from "react";
import Styles from "./datePickerElement.module.scss";
import DatePicker from "apollo-react/components/DatePicker";

interface DatePickerProps {
  label: string;
  helperText?: string;
  isFullWidth: boolean;
  size: "small" | "medium";
  dateFormat?: string;
  placeholder?: string;
  isRequired?: boolean;
}

const DatePickerElement: FC<DatePickerProps> = ({
  label,
  helperText = "",
  isFullWidth,
  size,
  dateFormat = "DD-MMM-YYYY",
  placeholder = "dd-mmm-yyyy",
  isRequired = false,
}) => {
  return (
    <div className={Styles.datePickerElement}>
      <DatePicker
        label={label}
        helperText={helperText}
        fullWidth={isFullWidth}
        size={size}
        dateFormat={dateFormat}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
};

export default DatePickerElement;
