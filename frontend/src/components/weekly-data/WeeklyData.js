import React from 'react';
import Loading from '../loading/Loading';
import PropTypes from 'prop-types';

const WeeklyData = ({ weekly, isLoading }) => (
  <div>{isLoading ? <Loading /> : <p>Weekly data loaded!</p>}</div>
);

WeeklyData.propTypes = {
  weekly: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default WeeklyData;
