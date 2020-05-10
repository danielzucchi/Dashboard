export const actionTypes = {
  GET_DATA: 'GET_DATA',
  SET_WEEKLY_DATA: 'SET_WEEKLY_DATA',
  SET_TOP_DATA: 'SET_TOP_DATA',
};

export const getData = option => ({
  type: actionTypes.GET_DATA,
  option,
});

export const setWeeklyData = data => ({
  type: actionTypes.SET_WEEKLY_DATA,
  data,
});

export const setTopData = data => ({
  type: actionTypes.SET_TOP_DATA,
  data,
});
