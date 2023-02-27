import * as React from "react";
import CustomButton from "./CustomButton";

export default {
  title: "CustomButton"
};

export const ContainedButton = () => <CustomButton variant="contained">{'Contained Test'}</CustomButton>;
export const ButtonWithOnClick = () => <CustomButton variant="contained" onClick={() => alert('Storybook test')}>{'Contained With On Click'}</CustomButton>;
