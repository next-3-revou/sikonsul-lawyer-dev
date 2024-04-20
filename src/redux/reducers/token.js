import {ADD_TOKEN,CLEAR_TOKEN} from '../actionTypes'

const initialState = {
    tokenizer: {
        accessToken: '',
    }
}

export default function token(state = initialState, action) {
    switch (action.type) {
        case ADD_TOKEN:
            return {
                ...state,
                tokenizer: {
                    ...state.tokenizer,
                    accessToken: action.payload,
                },
            };

        case CLEAR_TOKEN:
            return {
                initialState,
            };

        default:
            break;
    }
    return state;
}