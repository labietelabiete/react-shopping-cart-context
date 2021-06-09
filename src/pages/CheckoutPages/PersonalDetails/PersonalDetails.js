import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";

import withLayout from "../../../hoc/withLayout";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import OverviewSidebar from "../../../components/OverviewSidebar";

import PersonalDetailsSchema from "./PersonalDetailsSchema";

import checkoutContext from "../../../context/checkoutData";

const isCheckout = true;

function PersonalDetails({ cartItems }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { setCheckoutData, state } = useContext(checkoutContext);

  const formik = useFormik({
    initialValues: {
      name: state.name,
      email: state.email,
      phonePrefix: state.phonePrefix ? state.phonePrefix : "+34",
      phoneNumber: state.phoneNumber,
    },
    validationSchema: PersonalDetailsSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setCheckoutData({
        name: values.name,
        email: values.email,
        phonePrefix: values.phonePrefix,
        phoneNumber: values.phoneNumber,
      });
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <div className="row">
      <div className="col col-8">
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            label="Name"
            id="name"
            value={formik.values.name}
            placeholder="Name"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.name}
            errorMessage={formik.errors.name}
          />
          <Input
            type="text"
            label="Email"
            id="email"
            value={formik.values.email}
            placeholder="Email"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.email}
            errorMessage={formik.errors.email}
          />
          <div className="phone-inputs">
            <label htmlFor="phoneNumber">
              Phone Number
              <br />
              <select
                value={formik.values.phonePrefix}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="phonePrefix"
              >
                <option value="+34">Spain +34</option>
                <option value="+39">Italy +39</option>
                <option value="+49">Germany +49</option>
                <option value="+33">France +33</option>
                <option value="+31">Netherlands +31</option>
              </select>
              <Input
                type="text"
                label=""
                id="phoneNumber"
                value={formik.values.phoneNumber}
                placeholder="Phone number"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.phoneNumber}
                errorMessage={formik.errors.phoneNumber}
              />
            </label>
          </div>
          <Button
            submitButton
            block
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {hasSubmitted && <Redirect to="/checkout/step-2" />}
      </div>

      <div className="col col-4">
        <OverviewSidebar className="col" cartItems={cartItems} />
      </div>
    </div>
  );
}

export default withLayout(PersonalDetails, isCheckout);
