import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postSmurf} from '../actions'

const AddSmurf = props => {
    const [name, setName] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();

    const handleName = e => {
        setName(e.target.value);
    }
    const handleHeight = e => {
        setHeight(e.target.value+'cm');
    }
    const handleAge = e => {
        setAge(e.target.value);
    }
    const handleClick = () => {
        props.postSmurf({
            name: name,
            height: height,
            age: age,
            id: props.smurfs.length
        });
        setName('');
        setHeight('');
        setAge('');
    }

    return(
        <div className='form'>
            <h4>Add Smurf to Smurf Village</h4>
            <div>
                <input
                    className='input'
                    type='text'
                    name='newName'
                    placeholder='Name'
                    value={name}
                    onChange={handleName}
                />
            </div>
            <div>
                <input
                    className='input'
                    type='text'
                    name='newHeight'
                    placeholder='height (cm)'
                    value={height}
                    onChange={handleHeight}
                />
            </div>
            <div>
                <input
                    className='input'
                    type='text'
                    name='newAge'
                    placeholder='age (years)'
                    value={age}
                    onChange={handleAge}
                />
            </div>
            <button onClick={handleClick}>
                Add Smurf
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    {postSmurf}
)(AddSmurf);