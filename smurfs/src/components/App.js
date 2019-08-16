import React, {useEffect} from "react";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Edit from './Edit'

import SmurfForm from './SmurfForm'
import Smurfs from './Smurfs'
import {getData} from '../actions'

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
    return (
      <Router>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfForm  />
          <Smurfs smurfs={state.smurfs} />
          <Route path='/:id' component={Edit}  />
        </div>
      </Router>
    );

}

export default App;
