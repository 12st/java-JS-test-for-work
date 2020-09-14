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
            };
        case 'TASK_REQUESTED':
            return {
                ...state,
                tasks: state.tasks,
                loading: true,
                error: false
            }
        case 'TASK_ERROR':
            return {
                ...state,
                tasks: state.tasks,
                error: true
            };
        case 'ITEM_REMOVE_FROM_TASKS':
            const idx = action.payload;
            const itemIndex = state.tasks.findIndex(item => item.id === idx)

            return {
                ...state, 
                tasks: [
                    ...state.tasks.slice(0, itemIndex),
                    ...state.tasks.slice(itemIndex + 1)
                ]
            };
        case 'ITEM_ADD_TO_TASKS':
            return {
                ...state,
                loading: false,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            };
        default:
            return state;
    }
}

export default reducer;