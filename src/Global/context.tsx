import React, {createContext, useReducer} from "react";
import {appDispatch, iState} from "../Services/@types";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

const initialState = {
    productState: {
        products: []
    },
    categoryState: {
        categories: []
    }
};

export const AppContext = createContext<{
    initialState: iState;
    dispatch: React.Dispatch<appDispatch>;
}>({initialState, dispatch: () => null});

const defaultReducer = ({productState, categoryState}: iState, action: appDispatch) => ({
    productState: productReducer(productState, action),
    categoryState: categoryReducer(categoryState, action)
});

const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(defaultReducer, initialState);
    const store = React.useMemo(() => ({initialState: state, dispatch}), [state]);
    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
