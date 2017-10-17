import React from 'react';
import ChocolateCard from './ChocolateCard';
import PropTypes from 'prop-types';

const ChocolateList = (props) => (
  <div className="row">
    {props.chocolates.map(chocolate => <ChocolateCard key={chocolate.id} image={chocolate.image} title={chocolate.name}
                                                      desc={chocolate.desc}/>)}
  </div>
);

ChocolateList.propTypes = {
  chocolates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string,
  }))
};

export default ChocolateList