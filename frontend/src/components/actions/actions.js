const taskLoaded = (newTasks) => {
    return {
        type: 'TASK_LOADED',
        payload: newTasks
    }
}

const taskReuqested = () => {
    return {
        type: 'TASK_REQUESTED'
    }
}

const taskError = () => {
    return {
        type: 'TASK_ERROR'
    }
}

const deleteFromTask = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_TASKS',
        payload: id
        
    }
    
}

const addToTasks = (task) => {
    return {
        type: 'ITEM_ADD_TO_TASKS',
        payload: task
    }
}


export {
    taskLoaded,
    taskReuqested,
    deleteFromTask,
    taskError,
    addToTasks
};