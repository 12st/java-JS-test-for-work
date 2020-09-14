import React from 'react';
import useStyles from './styleTaskItem'




 const TaskItem =  ({taskItem,onDeleteFromTasks,onRisePriority, onLowerPriority}) => {

    
    const {name, task, priority} = taskItem;
    

    const ButtonDel = ({children}) => {
        const {btnDelete} = useStyles();
        return (
            <button className={btnDelete} onClick={(e) => {
                e.preventDefault();
                onDeleteFromTasks();
            }}>
                <span>{children}</span>
            </button>
        )
    }
    const ButtonLower = ({children}) => {
    let {btnLowerPriority, btnPriorityHiden} = useStyles();
        if(priority === 0) 
            btnLowerPriority = btnPriorityHiden;
        return (
            <button className={btnLowerPriority} onClick={(e) => {
                e.preventDefault();
                onLowerPriority();
            }}>
                <span>{children}</span>
            </button>
        )

    }
    const ButtonRise = ({children}) => {
        let {btnRisePriority,btnPriorityHiden} = useStyles();
        if(priority === 10)
            btnRisePriority = btnPriorityHiden;
        return (
            <button className={btnRisePriority} onClick={(e) => {
                e.preventDefault();
                onRisePriority();
            }}>
                <span>{children}</span>
            </button>
        )
    }

    return (
        <>
            <li className="task__item">
            
                    <div >
                        <div>Ответственный {name}</div> 
                        <div>Задача: {task}</div>
                        <div>Приоритет: {priority}</div>
                        <ButtonDel>Удалить</ButtonDel>
                        <ButtonLower>Понизить приоритет</ButtonLower>
                        <ButtonRise>Повысить приоритет</ButtonRise>
                    </div>
                
                
            </li>
        
        </>
    )
}






export default TaskItem;