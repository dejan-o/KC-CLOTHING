import React,{Component} from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import {Switch, Route} from 'react-router-dom'
import Sign_in_and_sign_up from './pages/sing_in_and_sign_up/Sign_in_and_sign_up';
import {auth} from './firebase/firebase';





class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



render(){
  return (
    <div>

        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={Sign_in_and_sign_up} />
        </Switch>
    </div>
  );
}
}
export default App;
