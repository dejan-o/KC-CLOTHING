import React,{Component} from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userActions';
import Sign_in_and_sign_up from './pages/sing_in_and_sign_up/Sign_in_and_sign_up';
import {auth,createUserProfileDocument} from './firebase/firebase';





class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    
    if(userAuth){
    
    const userRef = await createUserProfileDocument(userAuth);


      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      })
    }
     setCurrentUser(userAuth);
  })
}

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



render(){
  return (
    <div>

        <Header />
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<Sign_in_and_sign_up />)} />
        </Switch>
    </div>
  );
}
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
