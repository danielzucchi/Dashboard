import { actionTypes } from './actions';

export const initialState = {
  isLoading: true,
};

const dataReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.GET_DATA:
      newState.isLoading = true;

      return newState;

    case actionTypes.SET_DATA:
      newState.isLoading = false;
      newState.data = action.data;

      return newState;

    default:
      return state;
  }
};

export default dataReducer;
