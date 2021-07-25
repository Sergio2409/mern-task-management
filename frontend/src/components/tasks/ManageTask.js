import React, {useContext, useState, useEffect} from 'react';
import projectContex from '../../context/projects/ProjectContext';
import taskContext from '../../context/tasks/TaskContext';

const ManageTask = () => {

    //Exctract if a project is active
    const proyectsContext = useContext(projectContex);
    const tasksContext = useContext(taskContext);
    
    const [task, saveTask] = useState({
        name: ''
    });
    
    //Extract task name
    const {name} = task;

    //Extracting from Project Context
    const {
        currentproject
        } = proyectsContext;

    //Extracting from Task Context
    const { 
        errortask,
        taskselected,
        addNewTask,
        validateTaskFn,
        getProjectTasks,
        editTaskFn
        } = tasksContext;

    //UseEffect to detect if task selected is changed
    useEffect(() => {
        if(taskselected !== null){
            saveTask(taskselected);
        }
        else{
            saveTask({
                name: ''
            });
        }
    }, [taskselected]);
    
    if(!currentproject) return null;
    //Array destructuring to get the project
    const [realProject] = currentproject;

    const handleOnchange = e => {
        //Pass the new task to the state
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }

    const onAddTask = e => {
        e.preventDefault();
        //Validate
        if(name.trim() === ""){
            validateTaskFn();
            return;
        }
        
        //Check if edit or add action
        if(taskselected === null)
        {
            //Call add new task
            task.projectId = realProject.id;
            task.state = false;
            addNewTask(task);
        }
        else
        {
            editTaskFn(task);
        }
        //Update task list
        getProjectTasks(realProject.id);

        //Clean form
        saveTask({name:''});
        }

    return (
        <div className="formulario">
            <form
                onSubmit={onAddTask}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task name"
                        name="name"
                        value={name}
                        onChange={handleOnchange}
                        />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block btn-submit"
                        value={taskselected ? "Save Task" : "Add task"}/>
                </div>
            </form>
            {errortask ? <p className="mensaje error">The task name is required</p> :  null}
        </div>
     );
}
 
export default ManageTask;