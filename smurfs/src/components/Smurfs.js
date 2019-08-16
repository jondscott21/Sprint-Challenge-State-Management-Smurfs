import React from 'react';
import Smurf from './Smurf'

function Smurfs({smurfs}) {
    return (
        <div className='card-wrapper'>
            {smurfs && smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
        </div>
    )
}


export default Smurfs;