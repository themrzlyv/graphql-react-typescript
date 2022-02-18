import {appDispatch, iProductState} from "../Services/@types";

const productReducer = (state: iProductState, action: appDispatch): iProductState => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
};

export default productReducer;
