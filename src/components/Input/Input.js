import React, { useContext } from "react";

import checkoutContext from "../../context/checkoutData";

function Input({
  type = "text",
  label,
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  const { tempData, state } = useContext(checkoutContext);

  function expiryDate(e) {
    const data = `{"${e.target.id}" : "${e.target.value}"}`;
    tempData(JSON.parse(data));
    return value;
  }

  function protectCardNumber(e) {
    console.log(state);
    const data = `{"protectedCardNumber" : "${e.target.value}"}`;
    tempData(JSON.parse(data));
  }

  return (
    <div
      // className="form-group"
      className={
        type === "checkbox" ? "custom-control custom-switch" : "form-group"
      }
    >
      <label
        htmlFor={id}
        className={type === "checkbox" ? "custom-control-label" : ""}
      >
        {label}
      </label>
      <input
        // className={
        //   hasErrorMessage && errorMessage
        //     ? "form-control is-invalid"
        //     : "form-control is-valid"
        // }
        className={
          hasErrorMessage && errorMessage
            ? `${
                type === "checkbox"
                  ? "custom-control-input is-invalid"
                  : "form-control is-invalid"
              }`
            : `${
                type === "checkbox"
                  ? "custom-control-input is-valid"
                  : "form-control  is-valid"
              }`
        }
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          expiryDate(e);
          handleChange(e);
          if (id === "cardNumber") {
            protectCardNumber(e);
          }
        }}
        onBlur={handleBlur}
        {...props}
      />
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
