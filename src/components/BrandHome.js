import React from 'react';
import './BrandHome.css';
import ChocolateList from './ChocolateList';

class BrandHome extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isFetching: true}
  }

  componentWillMount() {
    let {match} = this.props;

    let brandPromise = fetch(`http://localhost:4000/brands/${match.params['brandId']}`)
      .then(response => response.json());

    let chocolatesPromise = fetch(`http://localhost:4000/chocolates?brandId=${match.params['brandId']}`)
      .then(response => response.json());

    Promise.all([brandPromise, chocolatesPromise])
      .then(responses => {
        this.setState({brandInfo: responses[0], chocolates: responses[1], isFetching: false})
      })
  }

  render() {
    let {brandInfo, chocolates} = this.state;
    if (this.state.isFetching)
      return <img className="spinner" src="../images/Facebook.gif"/>
    else return (
      <div className="brand-info">
        <section>
          <header><h1>{brandInfo.name}</h1></header>
          <p className="brand-desc">{brandInfo.desc}</p>
        </section>
        <section>
          <ChocolateList chocolates={chocolates}/>
        </section>
      </div>
    )
  }

}

export default BrandHome