import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchData from '../lib/data/fetchData';
import WeeklyDataContainer from '../components/weekly-data/WeeklyDataContainer';
import Loading from '../components/loading/Loading';
import PropTypes from 'prop-types';

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
      <h1>Weekly Data</h1>
      {!weekly ? <Loading /> : <WeeklyDataContainer />}
    </div>
  );
};

Weekly.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.shape({
    weekly: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default connect(state => state)(Weekly);
