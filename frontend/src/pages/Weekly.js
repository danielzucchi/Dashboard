import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchData from '../lib/data/fetchData';
import Loading from '../components/loading/Loading';

const Weekly = ({ dispatch, data }) => {
  const { isLoading } = data;

  useEffect(() => {
    dispatch(fetchData('weekly'));
  }, [dispatch]);

  return isLoading ? <Loading /> : <h1>Weekly here</h1>;
};

export default connect(state => state)(Weekly);
