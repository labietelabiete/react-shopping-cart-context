import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";

import withLayout from "../../../hoc/withLayout";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import PaymentDatailsSchema from "./PaymentDatailsSchema";

import checkoutContext from "../../../context/checkoutData";

const isCheckout = true;

function PaymentDetails() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { setCheckoutData, state } = useContext(checkoutContext);

  const formik = useFormik({
    initialValues: {
      paymentMethod: state.paymentMethod,
      cardName: state.cardName,
      cardNumber: state.cardNumber,
      cardExpiryDate: state.cardExpiryDate,
      cardCVV: state.cardCVV,
      termsConditions: state.termsConditions,
    },
    validationSchema: PaymentDatailsSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setCheckoutData({
        paymentMethod: values.paymentMethod,
        cardName: values.cardName,
        cardNumber: values.cardNumber,
        cardExpiryDate: values.cardExpiryDate,
        cardCVV: values.cardCVV,
        termsConditions: values.termsConditions,
      });
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <div className="row mt-5">
      <div className="col col-12">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <p>
              <strong>How would you like to pay?</strong>
            </p>
          </div>
          <div className="row">
            <div className="col col-4">
              <Input
                type="radio"
                label="Credit/Debit card"
                id="paymentMethod"
                value="Credit/Debit card"
                placeholder="Credit/Debit card"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.paymentMethod}
                errorMessage={formik.errors.paymentMethod}
                className="form-check-input"
              />
            </div>
            <div className="col col-4">
              <Input
                type="radio"
                label="Paypal"
                id="paymentMethod"
                value="Paypal"
                placeholder="Paypal"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.paymentMethod}
                errorMessage={formik.errors.paymentMethod}
                className="form-check-input"
              />
            </div>
            <div className="col col-4">
              <Input
                type="radio"
                label="Apple pay"
                id="paymentMethod"
                value="Apple pay"
                placeholder="Apple pay"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.paymentMethod}
                errorMessage={formik.errors.paymentMethod}
                className="form-check-input"
              />
            </div>
          </div>
          <div className="row">
            <div className="col col-6">
              <Input
                type="text"
                label="Card name*"
                id="cardName"
                value={formik.values.cardName}
                placeholder="Card name"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.cardName}
                errorMessage={formik.errors.cardName}
              />
              <Input
                type="text"
                label="Card number*"
                id="cardNumber"
                value={formik.values.cardNumber}
                placeholder="Card number"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.cardNumber}
                errorMessage={formik.errors.cardNumber}
              />
              <div className="card-inputs row col-12 text-center">
                <div className="col col-6">
                  <Input
                    type="text"
                    label="Card expiry date*"
                    id="cardExpiryDate"
                    value={formik.values.cardExpiryDate}
                    placeholder="111"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.cardExpiryDate}
                    errorMessage={formik.errors.cardExpiryDate}
                    pattern="[0-9]{2}-[0-9]{4}"
                  />
                </div>
                <div className="col col-6">
                  <Input
                    type="password"
                    label="Card CVV*"
                    id="cardCVV"
                    value={formik.values.cardCVV}
                    placeholder="CVV"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.cardCVV}
                    errorMessage={formik.errors.cardCVV}
                  />
                </div>
              </div>
            </div>
            <div className="col col-6">Card layout</div>
          </div>
          <div className="row">
            <Input
              type="checkbox"
              id="termsConditions"
              label=""
              value={formik.values.termsConditions}
              placeholder="termsConditions"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.termsConditions}
              errorMessage={formik.errors.termsConditions}
            />
            <p>
              I have read and accept the <u>booking conditions</u>,{" "}
              <u>general terms</u> and
              <u> privacy policy</u>.
            </p>
          </div>
          <Button
            submitButton
            block
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {hasSubmitted && <Redirect to="/checkout/order-summary" />}
      </div>
    </div>
  );
}

export default withLayout(PaymentDetails, isCheckout);
