import React, {} from 'react';

import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import ManageTask from '../tasks/ManageTask';
import TaskList from '../tasks/TaskList';


const ProjectView = () => {

    
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Header / >
                <main>
                    <ManageTask />
                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>
     );
} 
export default ProjectView;