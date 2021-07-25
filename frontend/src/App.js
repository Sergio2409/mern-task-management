
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProjectView from './components/projects/ProjectView';

import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/projects" component={ProjectView} />
        </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  );
}
export default App;
