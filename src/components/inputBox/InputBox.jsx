import React from "react";
import "./input.scss";

const InputBox = () => {
  return (
    <>
      <div className="formInput">
        <label htmlFor="input">FirstName</label>
        <input type="text" />
      </div>
    </>
  );
};

export default InputBox;
