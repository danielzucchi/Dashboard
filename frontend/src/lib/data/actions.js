export const actionTypes = {
  GET_DATA: 'GET_DATA',
  SET_DATA: 'SET_DATA',
};

export const getData = option => ({
  type: actionTypes.GET_DATA,
  option,
});

export const setData = data => ({
  type: actionTypes.SET_DATA,
  data,
});
