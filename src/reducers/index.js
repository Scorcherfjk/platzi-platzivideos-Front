const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    case 'SEARCH_VIDEO':
      return {
        ...state,
        search: action.payload.length > 0 ? [
          ...state.trends.filter((item) => item.title.toLocaleLowerCase().indexOf(action.payload) !== -1),
          ...state.originals.filter((item) => item.title.toLocaleLowerCase().indexOf(action.payload) !== -1),
        ] : [],
      };
    default:
      return state;
  }

};

export default reducer;
