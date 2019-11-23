import React from 'react';

const Smurfs = (props) => {
    return(
        <div className='smurfsCont'>
            {props.smurfs.map(smurf => 
            <div className='smurfs' key={smurf.id}>
                <p className='smurfs'>{smurf.name}</p>
                <p className='smurfs'>{smurf.height} tall</p>
                <p className='smurfs'>{smurf.age} years old</p>
            </div>
            )}
        </div>
    )
}

export default Smurfs;