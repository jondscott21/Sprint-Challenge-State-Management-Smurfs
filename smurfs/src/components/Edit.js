import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Edit(props) {
    const editState = useSelector(editState => editState)
    console.log(props.match.url.id)
    const [formState, setFormState] = useState(editState.smurfs.filter(item => item.id === props.match.url.id))
    // console.log(formState)
    // console.log(editState.smurfs)
    return (
        <div>
            <form>
                <input name='name' value={formState.name} ></input>
                <input></input>
                <input></input>
            </form>
        </div>
    );
}

export default Edit;