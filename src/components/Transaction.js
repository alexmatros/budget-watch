import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const colourSign = transaction.amount < 0 ? 'minus' : 'plus';
    const {deleteTr} = useContext(GlobalContext);

    return (
        <li className={colourSign}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <span>{transaction.category}</span><button
            onClick={() => deleteTr(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}