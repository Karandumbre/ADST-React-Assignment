import { FETCHREQUEST, FETCHREQUESTSUCCESS, FETCHREQUESTFAILURE } from './types';


const initialState = {
    loading: false,
    data: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHREQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCHREQUESTSUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCHREQUESTFAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;