import { ADD_PROFILE, CLEAR_PROFILE, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from '../actionTypes'

const initialState = {
    profile: {
        id: '',
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
    },
    loading: false,
    error: null
};


export default function profile(state = initialState, action) {
    console.log(action, 'test action')
    switch (action.type) {
        case ADD_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    id: action.payload.lawyerId,
                    name: action.payload.name
                },
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: {
                    ...initialState.profile
                }
            };
        case FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PROFILE_SUCCESS:
            const lawyer = action.payload.data.lawyer;
            return {
                ...state,
                profile: {
                    ...state.profile,
                    id: lawyer.id || state.profile.id,
                    name: lawyer.name || state.profile.name,
                    email: lawyer.email,
                    nik: lawyer.NIK,
                    university: lawyer.university,
                    description: lawyer.description,
                    alumnus: lawyer.profile[0].alumnus,
                    STRNumber: lawyer.profile[0].STRNumber,
                    specialization: lawyer.profile[0].specialization
                },
                loading: false,
                error: null
            };
        case FETCH_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                profile: {},
                error: action.payload
            };


        default:
            return {
                ...state
            }
    }
}