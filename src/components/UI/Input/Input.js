import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let inputElement = null;
  let inputValidation = null;

  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
    inputValidation = <p>Please enter correct input</p>;
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textArea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {inputValidation}
    </div>
  );
};

export default input;
