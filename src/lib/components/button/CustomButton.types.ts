import { ReactFragment, ReactNode, ReactPortal} from "react";

export interface CustomButtonProps {
  variant: "contained" | "text" | "outlined",
  onClick?: () => void,
  children?: ReactNode | ReactFragment | ReactPortal | boolean | null | undefined;
}
