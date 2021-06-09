import React from "react";

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
  const expresion = /[0-9]{2}/;
  function expiryDate(e) {
    if (id === "cardExpiryDate") {
      let hallado = e.target.value.match(expresion);
      if (hallado !== null) {
        hallado += "/";
      }
    }
    return value;
  }
  return (
    <div
      // className="form-group"
      className={
        type === "checkbox" ? "custom-control custom-switch" : "form-group"
      }
    >
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
            : `${type === "checkbox" ? "custom-control-input" : "form-control"}`
        }
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          expiryDate(e);
          handleChange(e);
        }}
        onBlur={handleBlur}
        {...props}
      />
      <label
        htmlFor={id}
        className={type === "checkbox" ? "custom-control-label" : ""}
      >
        {label}
      </label>
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
