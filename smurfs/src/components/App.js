import React, {useEffect} from "react";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'

import SmurfForm from './SmurfForm'
import Smurfs from './Smurfs'
import {getData} from '../actions'

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [state.smurfs, dispatch])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm dispatch={dispatch} />
        <Smurfs smurfs={state.smurfs}  />
      </div>
    );

}

export default App;
