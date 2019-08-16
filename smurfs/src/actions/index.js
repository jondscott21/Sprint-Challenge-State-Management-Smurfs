import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const DELETE_DATA_START = 'DELETE_DATA_START';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';
export const SET_DATA = 'SET_DATA';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      });
  };
};

export const deleteData = (id) => {
    return dispatch => {
      dispatch({ type: DELETE_DATA_START });
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
          dispatch({ type: DELETE_DATA_SUCCESS, payload: id });
        })
        .catch(err => {
          dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
        });
    };
  };

  export const setData = (obj) => {
    return dispatch => {
      dispatch({type: SET_DATA, payload: obj})
    }
  }