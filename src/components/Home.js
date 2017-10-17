import React from 'react';

import {Link} from 'react-router-dom';

const Home = (props) => (
  <div className="home">
    <p>Chocolate collection is a crowd sourced portal which gives you details about world renowned brands and
      chocolates</p>
    <p>Please <Link to="/signup">signup</Link>, to contribute. Happy chocolating :-)</p>
  </div>
);

export default Home