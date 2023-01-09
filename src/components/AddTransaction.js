import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("None");
    const [isIncome, setIsIncome] = useState(true);

    const {addTr} = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTr = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
            category: category 
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
        <select className='drop' onChange={(e) => setCategory(e.target.value)}>
            <option>Choose a category</option>
            <option value="Salary">Salary</option>
            <option value="MiscInc">Misc.</option>
        </select>
    )

    const expenseList = (
        <select className='drop' onChange={(e) => setCategory(e.target.value)}>
            <option>Choose a category</option>
            <option value="Housing">Housing</option>
            <option value="Transportation">Transportation</option>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Insurance">Insurance</option>
            <option value="MiscExp">Misc.</option>
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
