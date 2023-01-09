import React, { useState } from "react";

export default function ToggleHistory({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide History ▲" : "Show History ▼";

  return (
    <div className="component-container">
      {show && children}
      <button className="btn" onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}
