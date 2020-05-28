import { FETCHREQUEST, FETCHREQUESTSUCCESS, FETCHREQUESTFAILURE } from './types';
import axios from 'axios';

export const fetchRequest = () => {
    return {
        type: FETCHREQUEST
    }
}


export const fetchRequestSuccess = (data) => {
    return {
        type: FETCHREQUESTSUCCESS,
        payload: data
    }
}


export const fetchRequestFailure = (error) => {
    return {
        type: FETCHREQUESTFAILURE,
        payload: error
    }
}

export const fetchInitialRequest = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get('https://codifyinditest.com/script_test/api-test/').then(res => {
            dispatch(fetchRequestSuccess(res.data['script test']));
        }).catch(error => {
            dispatch(fetchRequestFailure(error));
        })
    }
}