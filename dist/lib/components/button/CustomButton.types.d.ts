export interface CustomButtonProps {
    variant: "contained" | "text" | "outlined";
    innerText: string;
    onClick?: () => void;
}
