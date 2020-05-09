import { actionTypes } from './actions';

export const initialState = {
  isLoading: true,
};

const dataReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.GET_WEEKLY_DATA:
      newState.isLoading = true;

      return newState;

    case actionTypes.SET_WEEKLY_DATA:
      newState.isLoading = false;
      newState.weeklyData = action.data;

      return newState;

    case actionTypes.GET_TOP_DATA:
      newState.isLoading = true;

      return newState;

    case actionTypes.SET_TOP_DATA:
      newState.isLoading = false;
      newState.topData = action.data;

      return newState;

    default:
      return state;
  }
};

export default dataReducer;
