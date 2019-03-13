import React from 'react';
import { ProjectCard } from '../../_common';
import './index.css';
import projects from './projects';

const ProjectsGrid = props => (
    <div className='ProjectsGrid'>
        {projects.map(item => (
            <ProjectCard
                item = {item}
                key = {item.id}
            />
        ))}
    </div>
);

export default ProjectsGrid;