import React from "react";
import styles from "./Switch.module.scss";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={`${styles["react-switch-checkbox"]} `}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={`${styles["react-switch-label"]}  ${
          !isOn ? "border-2 border-black" : "border-2 border-black"
        }`}
        htmlFor={`react-switch-new`}
        style={{ background: isOn && `#000000` }}
      >
        <span
          className={`${styles["react-switch-button"]} ${
            !isOn ? "border-2 border-black" : ""
          }`}
          style={{ background: isOn && `#0066FF` }}
        />
      </label>
    </>
  );
};

export default Switch;
