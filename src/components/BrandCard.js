import React from 'react'
import PropTypes from 'prop-types';

const BrandCard = (props) => (

  <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
    <div className="card">
      <img className="card-img-top"
           style={styles.image}
           alt={props.title}
           src={props.image}/>
      <div className="card-block" style={styles.cardBlock}>
        <h5 className="text-bold" style={styles.title}>{props.title}</h5>
      </div>
    </div>
  </div>
);

const styles = {
  image: {
    height: 120,
    padding: 10,
  },
  cardBlock: {
    backgroundColor: 'gold'
  },
  title: {
    color: 'brown',
    fontFamily: '"Pacifico", cursive',
    fontSize: '1.5em'
  }
};


BrandCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BrandCard