import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import BrandCard from './components/BrandCard';
import BrandList from './components/BrandList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {brands: [], types: []}
  }

  componentWillMount() {
    fetch('http://localhost:4000/brands')
      .then(r => r.json())
      .then(brands => this.setState({brands}))
  }

  render() {
    return (
      <div className="container">
        <Navigation/>
        <Header/>
        {/*<div className="row">
          <Card
            image="images/Banniere_HP_pickandmix.jpg"
            title="Lindor"/>
          <Card
            image="images/key_visual_Excellence_Mobile_1.2.jpg"
            title="Excellence"/>
          <Card
            image="images/LINDT-History-HELLO_Mobile_1.2.jpg"
            title="Hello"/>
          <Card
            image="images/00_Hmpg_Signature_-_Salted_Caramels_server_left_.jpg"
            title="Salted Caramel"/>
        </div>*/}
        {this.state.brands.length ? <BrandList brands={this.state.brands}/> : <img className="spinner" src="images/Spinner.gif"/>}

        <Footer/>
      </div>
    );
  }
}

export default App;
