import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: []
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