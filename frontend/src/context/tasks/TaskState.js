import React, {useReducer} from 'react';
import taskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import { v4 as uuidv4 } from 'uuid';

import {
    TASKS_PROJECTS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    STATE_TASK,
    CURRENT_TASK,
    EDIT_TASK
 } from '../../types';

 const TaskState = props => {

    const initialState = {
        tasks: [
            {id:1, name: "Chose Plataform", state:true, projectId: 1},
            {id:2, name: "Chose Colors", state:false, projectId: 2},
            {id:3, name: "Chose Payment Plataform", state:false, projectId: 3},
            {id:4, name: "Chose PlaHosting", state:true, projectId: 4},
            {id:5, name: "Chose Plataform", state:true, projectId: 1},
            {id:6, name: "Chose Colors", state:false, projectId: 2},
            {id:7, name: "Chose Payment Plataform", state:false, projectId: 3},
            {id:8, name: "Chose Plataform", state:true, projectId: 4},
            {id:9, name: "Chose Colors", state:false, projectId: 1},
            {id:10, name: "Chose Payment Plataform", state:false, projectId: 2},
            {id:11, name: "Chose Plataform", state:true, projectId: 3},
            {id:12, name: "Chose Colors", state:false, projectId: 4},
            {id:13, name: "Chose Payment Plataform", state:false, projectId: 3},
        ],
        tasksprojects: null,
        errortask: false,
        taskselected: null
    }

    //Dispatch to execute the actions
    const [state, dispatch] = useReducer(TaskReducer, initialState)

    //CRUD Functions
    const getProjectTasks = projectId => {
        dispatch({
            type: TASKS_PROJECTS,
            payload: projectId
        })
    }

    const addNewTask = newTask => {
        newTask.id = uuidv4();
        dispatch({
            type: ADD_TASK,
            payload: newTask
        })
    }

    //Validate task and display an error if necessary
    const validateTaskFn = () => {
        dispatch({
            type: VALIDATE_TASK,
        })
    }
    
    //Delete task
    const delteTaskFn = id =>{
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    //Change task state
    const changeTaskStateFn = task =>{
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    //Extract task to modify it
    const saveCurrentTaskFn = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    //Edit task
    const editTaskFn = task => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
    }

    return (
    <taskContext.Provider
        value={{
            tasks: state.tasks,
            tasksprojects: state.tasksprojects,
            errortask: state.errortask,
            taskselected: state.taskselected,
            getProjectTasks,
            addNewTask,
            validateTaskFn,
            delteTaskFn,
            changeTaskStateFn,
            saveCurrentTaskFn,
            editTaskFn
        }}>
        {props.children}
    </taskContext.Provider>
    );
 }
  
 export default TaskState;