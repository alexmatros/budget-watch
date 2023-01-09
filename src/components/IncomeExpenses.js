import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const amountsTransactions = transactions.map(transaction => transaction.amount);
    const income = amountsTransactions.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = amountsTransactions.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense * -1}</p>
            </div>
        </div>
    )
}