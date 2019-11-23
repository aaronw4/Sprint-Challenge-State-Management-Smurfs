import axios from 'axios'
export const GET_SMURF_DATA = 'GET_SMURF_DATA';
export const POST_SMURF = 'POST_SMURF';

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

export const postSmurf = item => dispatch => {
    axios
        .post('http://localhost:3333/smurfs')
        .then(dispatch({
            type:POST_SMURF,
            payload: item
        }))
        .catch(err => {
            console.log(err);
        })
}
