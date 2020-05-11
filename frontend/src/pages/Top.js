import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TopDataContainer from '../components/top-data/TopDataContainer';
import Loading from '../components/loading/Loading';
import fetchData from '../lib/data/fetchData';
import PropTypes from 'prop-types';

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
      {!top ? <Loading /> : <TopDataContainer />}
    </div>
  );
};

Top.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.shape({
    top: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default connect(state => state)(Top);
