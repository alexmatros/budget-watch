import React, { useContext, useState } from "react";
import { GlobalContext } from '../context/GlobalState';


export default function ToggleHistory({ children }) {
    const {transactions} = useContext(GlobalContext);
	
    // React state to manage visibility
    const [show, setShow] = useState();

    // function to toggle the boolean value
    function toggleShow() {
        if (transactions.length > 0){
			setShow(!show);
		}
    }

    var buttonText = show ? "Hide History ▲" : "Show History ▼";

    return (
        <div className="component-container">
            {show && children}
            <button className="btn" onClick={toggleShow}>{buttonText}</button>
        </div>
    );
}
