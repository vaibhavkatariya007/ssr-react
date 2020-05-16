const initialState = {
  message: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return {
        ...state,
        newsData: action.data,
      };
    default:
      return state;
  }
};

export const setNewsData = (data) => ({ type: 'SET_NEWS', data });

export const setAsyncNews = (data) => (dispatch) => {
  if (data) {
    return dispatch(setNewsData(data));
  }
};
