import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import {Switch, Route} from 'react-router-dom'

//JUST FOR TESTING
const Hats = () =>{
  return <h1>HATS</h1>
}




function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/hats' component={Hats} />
        </Switch>
    </div>
  );
}

export default App;
