import { GET_FAC_REQUEST, GET_FAC_SUCCESS, GET_FAC_FAILURE } from './actions';

const initialState = {
    loading: false,
    data: {},
    error: '',
};

const factureReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAC_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_FAC_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: '',
            };
        case GET_FAC_FAILURE:
            return {
                loading: false,
                data: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default factureReducer;
