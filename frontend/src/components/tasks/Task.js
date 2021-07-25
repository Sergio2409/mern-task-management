import React, {useContext} from 'react';
import taskContext from '../../context/tasks/TaskContext';

const Task = ({task}) => {

    const tasksContext = useContext(taskContext);
    //Extracting from Task Context
    const { 
        delteTaskFn,
        getProjectTasks,
        changeTaskStateFn,
        saveCurrentTaskFn
        } = tasksContext;

    //Handle delete action
    const handleDelete = e => {
        e.preventDefault();
        
        //Validate delete
        if(task.name === '') return;
        //Delete the task
        delteTaskFn(task.id)
        //Update task list
        getProjectTasks(task.projectId);
    }

    //Handle task done clic
    const handlTaskDone = () => {
        task.state = !task.state;
        changeTaskStateFn(task);
    }

    const handleEdit = () => {
        saveCurrentTaskFn(task);
    }

    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state ? 
                    (<button type="button" 
                            className="completo"
                            onClick={handlTaskDone}
                            >Done</button>)
                    :
                    (<button type="button" 
                            className="incompleto"
                            onClick={handlTaskDone}
                            >In progress</button>)
                }
            </div>
            <div className="acciones">
                <button 
                    type="button" 
                    className="btn btn-primario"
                    onClick={handleEdit}
                    >Edit</button>
                <button 
                    type="button" 
                    className="btn btn-secundario"
                    onClick={handleDelete}
                    >Delete</button>
            </div>
        </li>
     );
}
 
export default Task;