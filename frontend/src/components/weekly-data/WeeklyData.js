import React from 'react';
import Loading from '../loading/Loading';

const WeeklyData = ({ weekly, isLoading }) => (
  <div>{isLoading ? <Loading /> : <p>Weekly data loaded!</p>}</div>
);

export default WeeklyData;
