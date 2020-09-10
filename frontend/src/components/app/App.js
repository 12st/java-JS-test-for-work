import React from 'react';
import Header from '../app-header/appHeader' 
import useStyles from './styleApp.js'
import TaskList from '../task-list/taskList'
import TaskAdd from '../task-add-form/taskAdd'

const App = () => {
  const classes = useStyles();
  return(
    <div className={classes.app}>
      <Header/>
      <TaskAdd/>
      <TaskList/>
    </div>
  )
}

export default App;
