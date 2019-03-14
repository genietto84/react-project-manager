import React from 'react';
import { ProjectCard } from '../../_common';
import './index.css';

const ProjectsGrid = props => (
    <div className='ProjectsGrid'>
        {props.projects.map(item => (
            <ProjectCard
                item = {item}
                key = {item.id}
                handleClick = {props.goToDetails(item.id)}
            />
        ))}
    </div>
)

export default ProjectsGrid;