import React, { FC } from "react";
import Styles from "./timePickerElement.module.scss";
import TimePicker from "apollo-react/components/TimePicker";

interface TimePickerProps {
  label: string;
  helperText?: string;
  isFullWidth: boolean;
  size: "small" | "medium";
  placeholder?: string;
  isRequired?: boolean;
}

const TimePickerElement: FC<TimePickerProps> = ({
  label,
  helperText = "",
  isFullWidth,
  size,
  placeholder = "",
  isRequired = false,
}) => {
  return (
    <div className={Styles.timePickerElement}>
      <TimePicker
        label={label}
        helperText={helperText}
        fullWidth={isFullWidth}
        size={size}
      />
    </div>
  );
};

export default TimePickerElement;
