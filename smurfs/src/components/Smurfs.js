import React from 'react';
import Smurf from './Smurf'

function Smurfs(props) {
    return (
        <div className='card-wrapper'>
            {props.smurfs && props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
        </div>
    )
}


export default Smurfs;