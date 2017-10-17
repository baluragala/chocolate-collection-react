import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import BrandList from './components/BrandList';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import {Switch} from 'react-router';
import ChocolateList from './components/ChocolateList';
import SearchResult from './components/SearchResult';
import Signup from './components/Signup';
import Login from './components/Login';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {brands: [], chocolates: []};

  }

  componentWillMount() {
    fetch('http://localhost:4000/brands')
      .then(r => r.json())
      .then(brands => this.setState({brands}));

    fetch('http://localhost:4000/chocolates')
      .then(r => r.json())
      .then(chocolates => this.setState({chocolates}))
  }

  render() {
    return (
      <div className="container">
        <Navigation/>
        <Header/>
        {/* Application Routing */}
        <main>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/brands" render={() =>
              this.state.brands.length ? <BrandList brands={this.state.brands}/> :
                <img className="spinner" src="images/Facebook.gif"/>}/>
            <Route path="/chocolates" render={() =>
              this.state.chocolates.length ? <ChocolateList chocolates={this.state.chocolates}/> :
                <img className="spinner" src="images/Facebook.gif"/>}/>
            <Route path="/search" component={SearchResult}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
