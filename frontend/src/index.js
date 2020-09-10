import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/App.js';
import ErrorBoundry from './components/error-boundry/errorBountly'
import store from './store';
import TaskService from './services/taskServise'
import TaskServiceContext from './components/task-service-context/taskServiceContext'

const taskServise = new TaskService();

ReactDOM.render(
  <Provider store={store}>
     <ErrorBoundry>
      <TaskServiceContext.Provider value={taskServise}>
         <App/>
      </TaskServiceContext.Provider>
     </ErrorBoundry>
  </Provider>
   
  
, document.getElementById('root')
);

