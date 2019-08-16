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
  }, [])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <Smurfs smurfs={state.smurfs} />
        <SmurfForm />
      </div>
    );

}

export default App;
