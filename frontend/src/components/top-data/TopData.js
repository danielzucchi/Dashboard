import React from 'react';
import Loading from '../loading/Loading';
import PropTypes from 'prop-types';

const TopData = ({ top, isLoading }) => (
  <div>{isLoading ? <Loading /> : <p>Top data loaded!</p>}</div>
);

TopData.propTypes = {
  top: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default TopData;
