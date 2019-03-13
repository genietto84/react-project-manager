import React from 'react';
import ProjectsHeader from './ProjectsHeader';
import ProjectsGrid from './ProjectsGrid';

const Projects = props => (
    <div className="Projects">
        <ProjectsHeader title='I miei progetti' buttonText='Aggiungi progetto' />

        <ProjectsGrid />        
    </div>
);

export default Projects;