import React, {createContext, useReducer} from "react";
import FunctionReducer from "./FunctionReducer"

const initialState = {
   transactions: [
        {id:1, transaction: "Flower", amount: 20},
        {id:2, transaction: "Garden", amount: -20},
        {id:3, transaction: "Mill", amount: -20}
    ]
}

export const StateContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(FunctionReducer,initialState);
    return (<StateContext.Provider value={{
        transactions: state.transactions,
        }}>
        {children}
    </StateContext.Provider>);
}
