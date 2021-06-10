import React, { useContext } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

import checkoutContext from "../../context/checkoutData";

function NavBar() {
  const { setCheckoutData, state } = useContext(checkoutContext);
  console.log(setCheckoutData);
  console.log(state);
  return (
    <div>
      <ProgressBar now={state.navBar} />
      {/* <ProgressBar now={90} /> */}
    </div>
  );
}

export default NavBar;
