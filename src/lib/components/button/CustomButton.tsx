import React from 'react';
import { CustomButtonProps } from "./CustomButton.types";
import './CustomButton.scss';
import { Button } from "@mui/material";

const CustomButton: React.FC<CustomButtonProps> = (props) => {

  const {innerText, ...restOfProps} = props;

  return (
    <div className="customButton"><Button {...restOfProps}>{innerText}</Button></div>
  );
}

export default CustomButton;
