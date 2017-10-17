import React from 'react';
import ChocolateList from './ChocolateList';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    let {location} = this.props;
    fetch(`http://localhost:4000/chocolates?name_like=${location.search.split('=')[1]}`)
      .then(r => r.json())
      .then(chocolates => {

        this.setState({chocolates, isEmpty: chocolates.length})
      });
  }

  render() {
    return (
      <div>
        {
          this.state.chocolates ? <ChocolateList chocolates={this.state.chocolates}/> :
            <img className="spinner" src="images/Facebook.gif"/>
        }

        {
          this.state.isEmpty === 0 && <div>
            <h2 style={{textAlign: 'center'}}>No results found..</h2>
          </div>
        }
      </div>
    )
  }
}


export default SearchResult