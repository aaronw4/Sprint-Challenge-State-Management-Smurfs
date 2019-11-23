import React from 'react';



const Smurfs = (props) => {
    return(
        <div className='smurfsCont'>
            {props.smurfs.map(smurf =>
            <div className='buttonCont'>
                <div className='smurfs' key={smurf.id}>
                    <p className='smurfs'>{smurf.name}</p>
                    <p className='smurfs'>{smurf.height} tall</p>
                    <p className='smurfs'>{smurf.age} years old</p>
                </div> 
                <button onClick={e => props.remove(smurf.id)}>X</button>
            </div>
            )}
        </div>
    )
}

export default Smurfs;