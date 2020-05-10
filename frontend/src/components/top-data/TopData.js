import React from 'react';
import Loading from '../loading/Loading';

const TopData = ({ top, isLoading }) => (
  <div>{isLoading ? <Loading /> : <p>Top data loaded!</p>}</div>
);

export default TopData;
