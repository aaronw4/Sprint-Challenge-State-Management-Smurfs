import {GET_SMURF_DATA, ADD_SMURF} from '../actions'

const initialState = {
    smurfs: [
        {name: '', height: '', age: '', id: null}
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURF_DATA:
            return {
                smurfs: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, {
                    name: action.payload.name,
                    height: action.payload.height,
                    age: action.payload.age,
                    id: action.payload.id
                }]
            }
        default:
            return state;
    }
}

export default reducer;