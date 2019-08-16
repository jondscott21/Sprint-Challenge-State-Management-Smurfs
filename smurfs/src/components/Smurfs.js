import React from 'react';
import Smurf from './Smurf'

function Smurfs(props) {
    console.log(props.smurfs)
    return (
        <div>
            {props.smurfs && props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
        </div>
    )
}


export default Smurfs;