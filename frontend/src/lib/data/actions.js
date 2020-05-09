export const actionTypes = {
  GET_WEEKLY_DATA: 'GET_WEEKLY_DATA',
  SET_WEEKLY_DATA: 'SET_WEEKLY_DATA',
  GET_TOP_DATA: 'GET_TOP_DATA',
  SET_TOP_DATA: 'SET_TOP_DATA',
};

export const getWeeklyData = () => ({
  type: actionTypes.GET_WEEKLY_DATA,
});

export const setWeeklyData = data => ({
  type: actionTypes.SET_WEEKLY_DATA,
  data,
});

export const getTopData = () => ({
  type: actionTypes.GET_TOP_DATA,
});

export const setTopData = data => ({
  type: actionTypes.SET_TOP_DATA,
  data,
});
