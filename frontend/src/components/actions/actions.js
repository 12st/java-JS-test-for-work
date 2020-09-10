const taskLoaded = (newTasks) => {
    return {
        type: 'TASK_LOADED',
        payload: newTasks
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

export {taskLoaded,deleteFromTask,taskError};