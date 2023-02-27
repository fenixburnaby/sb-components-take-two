import React from 'react';
import { CustomButtonProps } from "./CustomButton.types";
import './CustomButton.scss';
import { Button } from "@mui/material";

const CustomButton: React.FC<CustomButtonProps> = (props) => {

  const { children, ...restOfProps } = props;

  return (
      <Button {...restOfProps}>{children}</Button>
  );
}

export default CustomButton;
