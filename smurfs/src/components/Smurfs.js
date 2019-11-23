import React from 'react';

const Smurfs = (props) => {
    return(
        <div>
            {props.smurfs.map(smurf => 
            <div>
                <p>{smurf.name}</p>
                <p>{smurf.age} years old</p>
                <p>{smurf.height}</p>
            </div>
            )}
        </div>
    )
}

export default Smurfs;