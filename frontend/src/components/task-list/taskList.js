import  React, {Component} from 'react';
import TaskItem from "../task-item/taskItem";
import WithTaskServise from '../hoc/withTaskServise';
import {connect} from 'react-redux';
import {taskLoaded,deleteFromTask, taskReuqested,addToTasks, risePrioroty,taskError} from '../actions/actions'
import Error from '../error/error';
import Spinner from '../spiner/spiner';

class TaskList extends Component {

    componentDidMount() {
        this.props.taskReuqested();

        const {TaskService} = this.props;
        TaskService.getTaskItems()
        .then(res => this.props.taskLoaded(res))
        .catch(() => this.props.taskError());
    }
  

    render() {  
        const {TaskService} = this.props;

       const deleteItem = (id) => {
            console.log(id);
            TaskService.deleteResource("/tasks/", id)
                .then(() => {
                    this.props.deleteFromTask(id)
                })
                .catch(this.props.taskError());
        }

        const rPrioroty = (item) => {
            item.priority++;
           TaskService.deleteResource("/tasks/",item.id)
                .then(() => {
                    this.props.deleteFromTask(item.id)
                    this.props.taskReuqested();
                    TaskService.postResource("/tasks/",item)
                    .then(() => {
                        this.props.addToTasks(item)
                    })
                })
                .catch(this.props.taskError())
        }

        const lPriority = (item) => {
            item.priority--;
            TaskService.deleteResource("/tasks/",item.id)
                .then(() => {
                    this.props.deleteFromTask(item.id)
                    this.props.taskReuqested();
                    TaskService.postResource("/tasks/",item)
                    .then(() => {this.props.addToTasks(item)})
                })
                .catch(this.props.taskError())
        }


        const {taskItems,error,loading} = this.props;
            if (error)
                return <Error/>

            if (loading)
                return <Spinner/>


        let items = taskItems.sort((prev, next) =>  next.priority - prev.priority);
         items = taskItems.map(taskItem => {
            return ( <TaskItem
                        key = {taskItem.id} 
                        taskItem = {taskItem}
                        onDeleteFromTasks = {() => deleteItem(taskItem.id)}
                        onRisePriority = {() => rPrioroty(taskItem)}
                        onLowerPriority = {() => lPriority(taskItem)}/>
            )
        })

        return (
            <>
                <View items = {items}/>
            </> 
            )
        }
}
const mapStateToProps = (state) => {
    return {
        taskItems: state.tasks,
        task: state.tasks.priority,
        loading: state.loading,
    }
}

const mapDispatchToProps = {
    taskLoaded: taskLoaded,
    taskReuqested,
    deleteFromTask,
    addToTasks,
    risePrioroty, 
    taskError
}

const View = ({items}) => {

    return (
        <ul className="menu__list">
            {items}
        </ul>
    ) 
}

export default WithTaskServise()(connect(mapStateToProps, mapDispatchToProps)(TaskList) );