import axios from 'axios'

export const GET_SMURF_DATA = 'GET_SMURF_DATA';
export const ADD_SMURF = 'ADD_SMURF';

export const getSmurfData = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({
                type: GET_SMURF_DATA,
                payload: res.data
            })
        )
        .catch(err => {
            console.log(err);
        });            
}

export const addSmurf = item => {
    return {
        type: ADD_SMURF,
        payload: item
    }
}
