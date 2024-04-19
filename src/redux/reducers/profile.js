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
    switch (action.type) {
        case ADD_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    id: action.payload.lawyerId || action.payload.id,
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
        case CLEAR_PROFILE:
            return {
                ...state
            }
        case FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.payload,
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