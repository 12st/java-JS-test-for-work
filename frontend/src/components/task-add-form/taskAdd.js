import React,{Component} from 'react';
import WithTaskServise from '../hoc/withTaskServise';
import {connect} from 'react-redux';
import {addToTasks} from '../actions/actions';


 class TaskAdd extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            task: "",
            priority: "",
            fromE: false
        }
    }

     onNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
        
    }

    onTaskChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    onPriorityChange = (e) => {
        this.setState({
            priority: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let taskItem;
        taskItem = {
            name:this.state.name,
            task: this.state.task,
            priority:  Number.parseInt(this.state.priority),
            id: Date.now()
        }

        if (this.state.name === '' || this.state.task ==='' || this.state.priority === '')
            {
                alert("Форма не должна быть пустой!");
                return;
            }
        const {TaskService} = this.props;
        TaskService.postResource("/tasks/",taskItem)
        .then(() => {this.props.addToTasks(taskItem)})
        this.setState({
            name: '',
            task: '',
            priority: ''
        })
     }

    render() {    
            return(
                <div className="bottom-panel">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Имя исполнителя</label>
                            <input 
                            type="text"
                            className="form-control"
                            onChange={this.onNameChange}
                            value={this.state.name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Текст задачи</label>
                            <textarea className="form-control"  rows="3" type="text"  value={this.state.task} onChange={this.onTaskChange}>
                            </textarea>
                            

                        </div>
                        <select className="custom-select" 
                            type="number"
                            id="validationCustom04" 
                            onChange={this.onPriorityChange}
                            value={this.state.priority}>
                            <option >Приоритет</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <input className= "btn btn-primary" type="submit" defaultValue="Отправить"/>
                    </form>
            </div>
            )
        }
}

const mapStateToProps = (taskItem) => {
    return{
        taskItem
    }
};

const mapDispatchToProps = {
    addToTasks
}

export default WithTaskServise()(connect(mapStateToProps, mapDispatchToProps)(TaskAdd));
