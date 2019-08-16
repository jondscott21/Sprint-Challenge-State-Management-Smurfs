import React from 'react';

function Smurf({smurf}) {
    console.log(smurf)
    return(
        <div className="smurf-card">
            <h1>{smurf.name}</h1>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>
    )
}

export default Smurf;