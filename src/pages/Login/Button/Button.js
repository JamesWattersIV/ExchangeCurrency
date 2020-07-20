import React from "react";

import "./Button.scss";

const Button = ({ type, className, value, onClick, disabled }) => {
  return (
    <button
      type={type}
      className={className}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
