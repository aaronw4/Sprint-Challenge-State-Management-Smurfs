import axios from 'axios'

export const GET_SMURF_DATA = 'GET_SMURF_DATA';

export const getSmurfData = () => dispatch => {
    axios
        .get('/smurfs')
        .then(res => 
            dispatch({
                type: GET_SMURF_DATA,
                payload: res
            })
        )
        .catch(err => {
            console.log(err);
        });            
}