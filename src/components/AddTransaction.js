import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [isIncome, setIsIncome] = useState(true);

    const {addTr} = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTr = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTr(newTr);
    }

    const onAmountChange = e => {
        setAmount(e.target.value)

        if (amount >= 0) {
            setIsIncome(true);
        } else {
            setIsIncome(false);
        }
    }

    const incomeList = (
        <select>
            <option value="Salary">Salary</option>
            <option value="Misc">Misc.</option>
        </select>
    )

    const expenseList = (
        <select>
            <option value="vegs">vegs</option>
        </select>
    )

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={onAmountChange} placeholder="Enter amount..." />
                </div>
                {isIncome ? incomeList : expenseList}
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
