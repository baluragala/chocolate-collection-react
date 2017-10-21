import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrandList from '../components/BrandList';
import {Route} from 'react-router-dom';
import Home from '../components/Home';
import {Switch} from 'react-router';
import ChocolateList from '../components/ChocolateList';
import SearchResult from '../components/SearchResult';
import Signup from '../components/Signup';
import Login from '../components/Login';
import BrandHome from '../components/BrandHome';
import Logout from '../components/Logout';
import ChocolateDetail from '../components/ChocolateDetail';
import AddChocolate from '../components/AddChocolate';

import * as brandsActionCreators from '../actionCreators/brands'
import * as usersActionCreators from '../actionCreators/users'
import * as chocolatesActionCreators from '../actionCreators/chocolates'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {brands: [], chocolates: [], isLoggedIn: false};
    this.onSignupSuccess = this.onSignupSuccess.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:4000/brands')
      .then(r => r.json())
      .then(brands => this.setState({brands}));

    fetch('http://localhost:4000/chocolates')
      .then(r => r.json())
      .then(chocolates => this.setState({chocolates}))
  }

  onSignupSuccess(firstName, lastName) {
    this.setState({firstName, lastName, isLoggedIn: true})
  }

  onLoginSuccess(firstName, lastName) {

    this.setState({firstName, lastName, isLoggedIn: true})
  }

  doLogout() {
    this.setState({isLoggedIn: false})
  }

  render() {
    return (
      <div className="container">
        <Navigation isLoggedIn={this.state.isLoggedIn}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}/>
        <Header/>
        {/* Application Routing */}
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home"
                   render={props => <Home {...props} isLoggedIn={this.state.isLoggedIn} firstName={this.state.firstName}
                                          lastName={this.state.lastName}/>}/>
            <Route exact path="/brands" render={props =>
              this.state.brands.length ? <BrandList {...props} brands={this.state.brands}/> :
                <img className="spinner" src="images/Facebook.gif"/>}/>
            <Route path="/brands/:brandId" component={BrandHome}/>

            <Route exact path="/chocolates" render={props =>
              this.state.chocolates.length ?
                <ChocolateList {...props} chocolates={this.state.chocolates} isLoggedIn={this.state.isLoggedIn}/> :
                <img className="spinner" src="images/Facebook.gif"/>}/>
            <Route path="/chocolates/add" component={AddChocolate}/>
            <Route path="/chocolates/:chocolateId" component={ChocolateDetail}/>

            <Route path="/search" component={SearchResult}/>

            <Route path="/signup" render={props => <Signup {...props} onSignupSuccess={this.onSignupSuccess}/>}/>
            <Route path="/login" render={props => <Login {...props} onLoginSuccess={this.onLoginSuccess}/>}/>
            <Route path="/logout" render={props => <Logout {...props} doLogout={this.doLogout}/>}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    brands: state.brands.brands,
    chocolates: state.chocolates.chocolates,
    isLoggedIn: state.isLoggedIn
  }
}

function mapDisptachToProps(dispatch) {
  return {
    actions: bindActionCreators({...brandsActionCreators, ...usersActionCreators, ...chocolatesActionCreators}, dispatch)
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(App);
