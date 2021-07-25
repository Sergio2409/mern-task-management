import React, {Fragment, useContext} from 'react';
import projectContex from '../../context/projects/ProjectContext';
import taskContext from '../../context/tasks/TaskContext';
import Task from './Task';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const TaskList = () => {

    const proyectsContext = useContext(projectContex);
    const tasksContext = useContext(taskContext);
    const { 
            currentproject,
            deleteProjectFn
          } = proyectsContext;
    const { 
        tasksprojects,
          } = tasksContext;

    if(!currentproject) return <h2>Select a project</h2>;
    //Array destructuring to get the project
    const [realProject] = currentproject;

    const handleDeleteProject = () => {
        deleteProjectFn(realProject.id);
    }

    return (  
        <Fragment>
            <h2>Project: {realProject.projectName}</h2>
            <ul className="listado-tareas">
                {tasksprojects.length === 0
                    ? (<li className="task"><p>There are no tasks</p></li>)
                    :
                    <TransitionGroup>
                        {tasksprojects.map(task => (
                            <CSSTransition key={task.id} timeout={200} classNames='tarea'>
                                <Task  task={task} />
                            </CSSTransition>
                            ))}
                    </TransitionGroup>
                }
            </ul>
            <button 
                type="button" 
                className="btn btn-eliminar"
                onClick={handleDeleteProject}
                >Delete project &times;</button>
        </Fragment>
    );
}
 
export default TaskList;