import Typography from "apollo-react/components/Typography";
import React, { FC } from "react";

import Styles from "./typographyElement.module.scss";

interface TypographyProps {
  text: string;
}

const TypographyElement: FC<TypographyProps> = ({ text }) => {
  return (
    <div className={Styles.typographyElement}>
      <Typography>{text}</Typography>
    </div>
  );
};

export default TypographyElement;
