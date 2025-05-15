import Typography from "apollo-react/components/Typography";
import React, { FC } from "react";

import "./selectElement.scss";
import Select from "apollo-react/components/Select";
import MenuItem from "apollo-react/components/MenuItem";

interface SelectComponentProps {
  menuItems: MenuItem[];
  label: any;
  helperText?: string;
  value: any;
  placeholder?: string;
  isFullWidth: boolean;
  onChange: any;
  isRequired?: boolean;
  disabled?: boolean;
  size?: "small" | "medium";
}

interface MenuItem {
  value: string;
  name: string;
}
const SelectElement: FC<SelectComponentProps> = ({
  menuItems,
  label,
  onChange,
  value,
  isFullWidth,
  placeholder = "",
  helperText = "",
  isRequired = false,
  size = "small",
  disabled = false,
}) => {
  return (
    <div className="selectElement">
      <Select
        label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth={isFullWidth}
        required={isRequired}
        disabled={disabled}
        size={size}
        helperText={helperText}
      >
        {menuItems.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectElement;
