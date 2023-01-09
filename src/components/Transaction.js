import React from "react";

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const colourSign = transaction.amount < 0 ? 'minus' : 'plus';

    return (
        <li className={colourSign}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
        </li>
    )
}