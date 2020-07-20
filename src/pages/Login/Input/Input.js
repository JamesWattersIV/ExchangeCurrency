import React, { Fragment } from "react";

import "./Input.scss";

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  fontAwesome,
  required,
}) => {
  return (
    <Fragment>
      <div className="input-container">
        <i className={fontAwesome}></i>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
        />
      </div>
    </Fragment>
  );
};

export default Input;
