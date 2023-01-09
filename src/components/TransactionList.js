import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
import ToggleHistory from './ToggleHistory';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ToggleHistory>
                <ul className="list">
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                </ul>
            </ToggleHistory>
        </>
    )
}
