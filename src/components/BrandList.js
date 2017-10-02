import React from 'react';
import BrandCard from './BrandCard';
import PropTypes from 'prop-types';

const BrandList = (props) => (
  <div className="row">
    {props.brands.map(brand => <BrandCard image={brand.logo} title={brand.name}/>)}
  </div>
);

BrandList.propTypes = {
  brands: PropTypes.arrayOf({
    logo: PropTypes.shape.string,
    name: PropTypes.shape.string,
  })
};

export default BrandList