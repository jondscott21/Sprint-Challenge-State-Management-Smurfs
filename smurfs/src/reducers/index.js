import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, 
DELETE_DATA_START, DELETE_DATA_SUCCESS, DELETE_DATA_FAILURE, SET_DATA} from '../actions'

const initialState = {
    smurfs: [],
    error: "",
    isFetching: true
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: 'start failed',
                isFetching: true
            }
        case FETCH_DATA_SUCCESS:  
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_DATA_FAILURE: {
            return {
                ...state,
                error: action.payload
                };
            }
        case DELETE_DATA_START:
            return {
                ...state,
                error: 'delete failed',
                isFetching: true
            }
        case DELETE_DATA_SUCCESS:  
            return {
                ...state,
                smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
                isFetching: false,
                error: ''
            }
        case DELETE_DATA_FAILURE: {
            return {
                ...state,
                error: action.payload
                };
            }
        case SET_DATA: {
            return {
                ...state,
                smurfs: action.payload
                };
            }
        default: return state;
    }
}