import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import {Switch, Route} from 'react-router-dom'
import Sign_in_and_sign_up from './pages/sing_in_and_sign_up/Sign_in_and_sign_up';






function App() {
  return (
    <div>

        <Header />
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={Sign_in_and_sign_up} />
        </Switch>
    </div>
  );
}

export default App;
