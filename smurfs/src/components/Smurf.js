import React, {useEffect} from 'react';
import {deleteData, getData} from '../actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import {getData} from '../actions'

function Smurf({smurf}) {
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getData())
    //   }, [dispatch])
    return(
        <div className="smurf-card">
            <h1>{smurf.name}</h1>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button className='delete-btn' onClick={() => dispatch(deleteData(smurf.id))}><span role='img' aria-label='skull emoji'>💀</span></button>
            <Link to={`/${smurf.id}`}>Edit Smurf</Link>
        </div>
    )
}

export default Smurf;