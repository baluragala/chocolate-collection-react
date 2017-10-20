import React from 'react';
import './ChocolateDetail.css';

class ChocolateDetail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isFetching: true}
  }

  componentWillMount() {
    let {match} = this.props;

    fetch(`http://localhost:4000/chocolates/${match.params['chocolateId']}`)
      .then(response => response.json())
      .then(chocolateInfo => this.setState({chocolateInfo, isFetching: false}))
  }

  render() {
    let {chocolateInfo} = this.state;
    if (this.state.isFetching)
      return <img className="spinner" src="../images/Facebook.gif"/>
    else return (
      <div className="chocolate-info">
        <section>
          <header><h1>{chocolateInfo.name}</h1></header>
          <p className="chocolate-desc">{chocolateInfo.desc}</p>
          <img src={chocolateInfo.image} alt={chocolateInfo.name}/>
        </section>
      </div>
    )
  }

}

export default ChocolateDetail