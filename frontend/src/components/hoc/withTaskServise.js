import React from 'react';
import TaskServiceContext from '../task-service-context/taskServiceContext';

const WithTaskService = () => (Wrapped) => { 
    return (props) => {  
        return (
            <TaskServiceContext.Consumer>
                {
                    (TaskService) => {
                        return <Wrapped {...props} TaskService = {TaskService}/>
                    }
                }
            </TaskServiceContext.Consumer>
        )
    }
};

export default WithTaskService;