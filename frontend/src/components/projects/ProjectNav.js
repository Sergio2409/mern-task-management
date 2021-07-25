import React, {useContext} from 'react';
import projectContex from '../../context/projects/ProjectContext';
import taskContext
 from '../../context/tasks/TaskContext';
const ProjectNav = ({project}) => {
    //Get state of the form
    const proyectsContext = useContext(projectContex);
    const tasksContext = useContext(taskContext);

    const { 
            selectCurrentProjectFn,
          } = proyectsContext;
    const { 
        getProjectTasks,
        } = tasksContext;
    
    const selectProject = id => {
        selectCurrentProjectFn(id); //Set current project
        getProjectTasks(id); // Filter the tasks for the current project
    }
    
    return ( 
        <li>
            <button 
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}
                >{project.projectName}</button>
        </li>
     );
}
 
export default ProjectNav;