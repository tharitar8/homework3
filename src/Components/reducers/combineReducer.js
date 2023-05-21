// create for hw4
import { combineReducers } from "redux";

const authState = {
    username: '',
}

const authReducer = (state = authState, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload };
            default:
                return state
    }
}

const rootReducer = combineReducers({
    auth: authReducer,
})

export default rootReducer