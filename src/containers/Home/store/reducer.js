import {CHANGE_LISt} from './contants';
const defaultState = {
    name: 'dell',
    newList: []
}
export default (state=defaultState, action) => {
    switch(action.type) {
        case CHANGE_LISt:
            const newState  = {
                ...state,newList: action.list
            } 
            return newState;
        default: 
            return state;
    }
}