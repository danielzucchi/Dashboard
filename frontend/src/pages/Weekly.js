import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchData from '../lib/data/fetchData';
import WeeklyDataContainer from '../components/weekly-data/WeeklyDataContainer';

const Weekly = ({ dispatch, data }) => {
  const { weekly } = data;

  useEffect(() => {
    if (!weekly) {
      dispatch(fetchData('weekly'));
    }

    return;
  }, [dispatch, weekly]);

  return (
    <div>
      <h1>Weekly here</h1>
      <WeeklyDataContainer />
    </div>
  );
};

export default connect(state => state)(Weekly);
