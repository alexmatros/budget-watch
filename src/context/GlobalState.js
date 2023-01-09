import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Honey', amount: 300 },
        { id: 3, text: 'Bees', amount: -10 },
        { id: 4, text: 'Pollen', amount: 35 }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTr(id){
        dispatch({
            type: 'DELETE',
            payload: id
        });
    }

    function addTr(transaction){
        dispatch({
            type: 'ADD',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTr,
        addTr
    }}>
        {children}
    </GlobalContext.Provider>);
}