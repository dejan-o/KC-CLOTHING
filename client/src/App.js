import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import Header from './components/header/Header';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {checkUserSession} from './redux/user/userActions';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/userSelectors'
import Footer from './components/footer/Footer';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error_boundary/ErrorBoundary';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Sign_in_and_sign_up = lazy(() => import('./pages/sing_in_and_sign_up/Sign_in_and_sign_up'));

const App = ({ checkUserSession, currentUser }) => {

  
useEffect(() => {
  checkUserSession()
}, [checkUserSession]);





  return (
    <div>

        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
              <Route exact path='/' component={Homepage}/>
              <Route path='/shop' component={ShopPage} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/contact' component={Contact} />
              <Route exact path='/signin' render={() => currentUser ? (<Redirect to="/" />) : (<Sign_in_and_sign_up />)} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <Footer />
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
 
})


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
