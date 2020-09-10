const initalState = {
    tasks: [],
    loading: true,
    error:false
}


const reducer = (state = initalState, action) => {
    switch(action.type) {
        case 'TASK_LOADED':
            return {
                ...state,
                tasks: action.payload,
                loading:false
            }
        case 'TASK_ERROR':
            return {
                ...state,
                tasks: state.tasks,
                error: true
            };
        case 'ITEM_REMOVE_FROM_TASKS':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default reducer;