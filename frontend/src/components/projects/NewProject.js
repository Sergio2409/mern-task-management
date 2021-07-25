import React, {Fragment, useState, useContext} from 'react';
import projectContex from '../../context/projects/ProjectContext';

const NewProject = () => {

    //Get state of the form
    const proyectsContext = useContext(projectContex);
    const { displayFormProject, 
            errorform,
            displayFormFn, 
            addProjectFn,
            displayError
        } = proyectsContext;

    //State for project
    const [project, saveProject] = useState({
        projectName: ''
    });

    const onchangeProject = e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    //On submit form
    const onSubmit = e => {
        e.preventDefault();

        //Validate project
        if(projectName === ''){
            displayError();
            return;
        }
        
        //Add to the state
        addProjectFn(project);

        //Clean form
        saveProject({projectName:""})
    }

    const {projectName} = project;

    //Display the form
    const onClick = () => {
        displayFormFn();
    }

    return ( 
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClick}
            >New Project</button>

            { displayFormProject 
                ? 
                    (
                        <form 
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmit}
                        >
                        <input 
                                className="input-text"
                                type="text" 
                                name="projectName" 
                                placeholder="Project name..."
                                value={projectName || ''}
                                onChange={onchangeProject}
                            />
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block" 
                            value="Add project" />
                        </form>
                    )
                : null
            }
            {errorform ? <p className="mensaje error">The project name is required</p> : null
            }
        </Fragment>
     );
}
 
export default NewProject;