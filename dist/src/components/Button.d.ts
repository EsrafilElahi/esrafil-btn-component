/// <reference types="react" />
import "../index.css";
type ButtonClickFunction = (event?: React.MouseEvent<HTMLButtonElement>) => void;
interface Props {
    onClick?: ButtonClickFunction;
    children?: React.ReactNode;
}
export declare const Button: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
