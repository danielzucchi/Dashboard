import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TopDataContainer from '../components/top-data/TopDataContainer';
import fetchData from '../lib/data/fetchData';

const Top = ({ dispatch, data }) => {
  const { top } = data;

  useEffect(() => {
    if (!top) {
      dispatch(fetchData('top'));
    }

    return;
  }, [dispatch, top]);

  return (
    <div>
      <h1>Top Data</h1>
      <TopDataContainer />
    </div>
  );
};

export default connect(state => state)(Top);
