const initialState = {
  profile: {
    id:'',
    name: '',
    email: '',
    password: '',
    NIK: '',
    address: '',
    university: '',
    description: '',
    alumnus: '',
    STRNumber: '',
    specialization: []
  }
  };

const profileReducer = (state = initialState, action) => {
  console.log(action)
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
          university: action.payload.university,
          description: action.payload.description,
          alumnus: action.payload.alumnus,
          STRNumber: action.payload.STRNumber,
          specialization: action.payload.specialization

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