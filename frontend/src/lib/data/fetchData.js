import axios from 'axios';
import { getData, setData } from './actions';

const fetchData = option => {
  return async dispatch => {
    dispatch(getData(option));

    await axios
      .get(`/data/${option}`)
      .then(res => res.data)
      .then(data => dispatch(setData(data)))
      .catch(err => console.log(err));
  };
};

export default fetchData;
