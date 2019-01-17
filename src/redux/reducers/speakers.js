import {SPEAKERS_LOAD, SPEAKERS_LOAD_FAIL, SPEAKERS_LOAD_SUCCESS} from '../actions/speakers';

export function speakers(state = {
    data: [],
    isLoading:true,
    hasErrored: false,
    errorMessage: ""
}, action) {
    switch (action.type){
        case SPEAKERS_LOAD: {
            return Object.assign({}, state, {
                isLoading: true,
                hasErrored:false    
            });
        }
        case SPEAKERS_LOAD_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored:false    
            });
        }
        case SPEAKERS_LOAD_FAIL: {
            return Object.assign({}, state, {
                isLoading: false,
                hasErrored:true,
                errorMessage: action.error.message
            });
        }
        default:
            return state;
    }
}

