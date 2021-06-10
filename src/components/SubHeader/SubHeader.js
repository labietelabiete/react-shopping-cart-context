import React, { useContext } from "react";
import { Link } from "react-router-dom";

import checkoutContext from "../../context/checkoutData";

import NavBar from "../NavBar";
// import Button from "../Button";

export default function SubHeader() {
  const { setCheckoutData, state } = useContext(checkoutContext);
  console.log(setCheckoutData);
  console.log(state);

  return (
    <div className="row text-center">
      <div className="col col-3">
        <Link to="/checkout/step-1">
          <button
            className="navbar-button"
            type="button"
            disabled={state.disabledPersonalDetails}
          >
            1
          </button>
        </Link>
        <p>Personal details</p>
        {/* <Link to="/checkout/step-1">Personal Details</Link> */}
      </div>
      <div className="col col-3">
        <Link to="/checkout/step-2">
          <button
            className="navbar-button"
            type="button"
            disabled={state.disabledBillingAddress}
          >
            2
          </button>
        </Link>
        <p>Billing Address</p>
        {/* <Link to="/checkout/step-2">Billing Address</Link> */}
      </div>
      <div className="col col-3">
        <Link to="/checkout/step-3">
          <button
            className="navbar-button"
            type="button"
            disabled={state.disabledPaymentDetails}
          >
            3
          </button>
        </Link>
        <p>Payment Details</p>
        {/* <Link to="/checkout/step-3">Payment Details</Link> */}
      </div>
      <div className="col col-3">
        <Link to="/checkout/order-summary">
          <button
            className="navbar-button"
            type="button"
            disabled={state.disabledOrderSummary}
          >
            4
          </button>
        </Link>
        <p>Order Summary</p>

        {/* <Link to="/checkout/order-summary">Order Summary</Link> */}
      </div>
      <div className="col col-12">
        <NavBar />
      </div>
    </div>
  );
}
