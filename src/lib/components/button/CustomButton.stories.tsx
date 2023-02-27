import React from "react";
import CustomButton from "./CustomButton";

export default {
  title: "CustomButton"
};

export const ContainedButton = () => <CustomButton innerText="Contained Test" variant="contained" />;
export const ButtonWithOnClick = () => <CustomButton innerText="Contained Test" variant="contained" onClick={() => alert('Storybook test')} />;
