import axios from 'axios';

export const GET_FAC_REQUEST = 'GET_FAC_REQUEST';
export const GET_FAC_SUCCESS = 'GET_FAC_SUCCESS';
export const GET_FAC_FAILURE = 'GET_FAC_FAILURE';

export const getFacRequest = () => ({
    type: GET_FAC_REQUEST,
});

export const getFacSuccess = (data) => ({
    type: GET_FAC_SUCCESS,
    payload: data,
});

export const getFacFailure = (error) => ({
    type: GET_FAC_FAILURE,
    payload: error,
});

export const getFacById = (id) => {
    return async (dispatch) => {
        dispatch(getFacRequest());
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            dispatch(getFacSuccess(response.data));
        } catch (error) {
            dispatch(getFacFailure(error.message));
        }
    };
};
