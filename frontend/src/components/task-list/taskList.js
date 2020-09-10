import  React, {Component} from 'react';
import TaskItem from "../task-item/taskItem";
import WithTaskServise from '../hoc/withTaskServise';
import {connect} from 'react-redux';
import {taskLoaded} from '../actions/actions'
import Error from '../error/error';

class TaskList extends Component {

    componentDidMount() {
        const {TaskService} = this.props;
        TaskService.getTaskItems()
        .then(res => this.props.taskLoaded(res))
        .catch();
    }
    render() {  
        const {taskItems,error} = this.props;
            if (error){
                return <Error/>
            } 
        const items = taskItems.map(taskItem => {
            return ( <TaskItem
                        key = {taskItem.id} 
                        taskItem = {taskItem}/>
            )
        })

        return (
            <View items = {items}/> 
            )
        }
}
const mapStateToProps = (state) => {
    return {
        taskItems: state.tasks
    }
}

const mapDispatchToProps = {
    taskLoaded: taskLoaded
}

const View = ({items}) => {

    return (
        <ul className="menu__list">
            {items}
        </ul>
    ) 
}

export default WithTaskServise()(connect(mapStateToProps, mapDispatchToProps)(TaskList) );