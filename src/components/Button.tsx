import React from "react";
import "../index.css";

type Props = {
  title: string;
  onClick: any;
  children: React.ReactNode;
};

const Button = (props: Props) => {
  return (
    <>
      <button onClick={props.onClick} {...props}>
        {props.title}
      </button>
    </>
  );
};

export default Button;
