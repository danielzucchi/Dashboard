import axios from 'axios';
import { getData, setWeeklyData, setTopData } from './actions';

const fetchData = option => {
  return async dispatch => {
    dispatch(getData(option));

    await axios
      .get(`/data/${option}`)
      .then(res => res.data)
      .then(data => {
        if (option === 'weekly') {
          dispatch(setWeeklyData(data));
        } else {
          dispatch(setTopData(data));
        }
      })
      .catch(err => console.log(err));
  };
};

export default fetchData;
