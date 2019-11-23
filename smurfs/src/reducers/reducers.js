import {GET_SMURF_DATA} from '../actions'

const initialState = {
    smurfs: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURF_DATA:
            return {
                smurfs: action.payload
            }
        default:
            return state;
    }
}

export default reducer;