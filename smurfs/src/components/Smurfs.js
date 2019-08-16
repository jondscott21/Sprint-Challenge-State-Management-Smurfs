import React from 'react';
import Smurf from './Smurf'

function Smurfs({smurfs, dispatch}) {
    return (
        <div className='card-wrapper'>
            {smurfs && smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} dispatch={dispatch} />)}
        </div>
    )
}


export default Smurfs;