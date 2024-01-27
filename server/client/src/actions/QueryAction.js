import axios from 'axios'; //create krne ka treeks ahia post api (method)

export const QueryAction = (query) => async dispatch => {
    dispatch({type : 'RIDER_SUBMIT_REQUEST'})
    try {
        const res = await axios.post('/api/query/submit',query);
        dispatch({type : 'RIDER_SUBMIT_SUCCESS'});
    } catch (error) {
        dispatch({type : 'RIDER_SUBMIT_FAIL',payload : error})
    }
};
