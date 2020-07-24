import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import {Switch, Route} from 'react-router-dom'






function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
