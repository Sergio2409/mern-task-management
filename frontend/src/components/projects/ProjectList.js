import React, {useContext, useEffect} from 'react';
import ProjectNav from './ProjectNav';
import projectContex from '../../context/projects/ProjectContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ProjectList = () => {

    //Extract projects from initial state
    const proyectsContext = useContext(projectContex);
    const {projectList, loadProjectsFn} = proyectsContext;

    //Load projects when the component is loaded
    useEffect(() => {
        loadProjectsFn();
        // eslint-disable-next-line
    }, []);

    //Check if projectList has elements
    if(projectList.length === 0) return <p>There is no available projects</p>;


    return ( 
        <ul className="listado-proyectos">
            {
                <TransitionGroup>
                {projectList.map(project => (
                    <CSSTransition 
                        key={project.id}
                        timeout={200}
                        classNames='projecto'>
                            <ProjectNav project={project}/>
                    </CSSTransition>
                    
                ))}
                </TransitionGroup>
            }
        </ul>
     );
}
 
export default ProjectList;