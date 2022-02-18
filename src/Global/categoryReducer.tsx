import {appDispatch, iCategoryState} from "../Services/@types";

const categoryReducer = (state: iCategoryState, action: appDispatch): iCategoryState => {
    switch (action.type) {
        case "SET_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
};

export default categoryReducer;
