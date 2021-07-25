import React, {useReducer} from 'react';
import projectContex from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import { v4 as uuidv4 } from 'uuid';
import { 
    FORM_PROJECT, 
    LOAD_PROJECTS, 
    ADD_PROJECT,
    VALIDATE_PROJECT_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
 } from '../../types';


const ProjectState = props => {

    const projectList = [
        {id: 1, projectName: "Showcase"},
        {id: 2, projectName: "Intranet"},
        {id: 3, projectName: "Website design"},
        {id: 4, projectName: "MERN"}
    ]

    const initialState = {
        displayFormProject: false,
        errorform: false,
        currentproject: null,
        projectList: []
    }

    //Dispatch to execute the actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    //Functions for the CRUD
    const displayFormFn = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    //Load available projects
    const loadProjectsFn = () => {
        dispatch({
            type: LOAD_PROJECTS, 
            payload: projectList
        })
    }

    //Add new project
    const addProjectFn = project => {
        project.id = uuidv4();

        dispatch({
            type: ADD_PROJECT, 
            payload: project
        })
    }

    //Validate add project form
    const displayError= () =>{
        dispatch({
            type: VALIDATE_PROJECT_FORM
        })
    }

    //On select current project
    const selectCurrentProjectFn = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }

    //Delete a project
    const deleteProjectFn = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }
    
    return (
        <projectContex.Provider
            value={{
                displayFormProject: state.displayFormProject,
                projectList: state.projectList,
                errorform: state.errorform,
                currentproject: state.currentproject,
                displayFormFn,
                loadProjectsFn,
                addProjectFn,
                displayError,
                selectCurrentProjectFn,
                deleteProjectFn
            }}
        >
            {props.children}
        </projectContex.Provider>
    )
}
export default ProjectState;