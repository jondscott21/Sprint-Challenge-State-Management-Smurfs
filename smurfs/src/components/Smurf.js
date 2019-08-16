import React from 'react';
import {deleteData} from '../actions'
import { useDispatch } from 'react-redux'

function Smurf({smurf}) {
    const dispatch = useDispatch()
    return(
        <div className="smurf-card">
            <h1>{smurf.name}</h1>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button className='delete-btn' onClick={() => dispatch(deleteData(smurf.id))}>💀</button>
        </div>
    )
}

export default Smurf;