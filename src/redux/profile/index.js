const initialState = {
  profile: {
    id: '',
    name: '',
    email: '',
    nik: '',  
    occupation: '',
    isPremium: false
  }

};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profile: {
          ...state.profile,
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          nik: action.payload.NIK,
          occupation: action.payload.occupation,
          isPremium: action.payload.isPremium,
        },
      };

    case 'CLEAR_PROFILE':
      return {
        ...state
      }
      
    default:
      return {
        ...state
      }
  }
};

export default profileReducer;