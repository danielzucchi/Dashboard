import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/loading/Loading';
import fetchData from '../lib/data/fetchData';

const Top = ({ dispatch, data }) => {
  const { isLoading } = data;

  useEffect(() => {
    dispatch(fetchData('top'));
  }, [dispatch]);

  return isLoading ? <Loading /> : <h1>Top here</h1>;
};

export default connect(state => state)(Top);
