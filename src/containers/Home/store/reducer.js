const defaultState = {
    name: 'dell',
    newList: []
}
export default (state=defaultState, action) => {
    switch(action.type) {
        case "change_home_list":
            const newState  = {
                ...state,newList: action.list
            } 
            return newState;
        default: 
            return state;
    }
}