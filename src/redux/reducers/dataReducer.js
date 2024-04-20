const initialState = {
    news: [],
    specializations: [],
    lawyers: []
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NEWS':
        return {
          ...state,
          news: action.payload
        };
      case 'ADD_SPECIALIZATIONS':
        return {
          ...state,
          specializations: action.payload
        };
      case 'ADD_LAWYERS':
        return {
          ...state,
          lawyers: action.payload
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;