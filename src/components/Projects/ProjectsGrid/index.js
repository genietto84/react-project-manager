import React from 'react';
import { ProjectCard } from '../../_common';
import './index.css';

const ProjectsGrid = props => (
    <div className='ProjectsGrid'>
        {props.projects.map(item => (
            <ProjectCard
                item = {item}
                key = {item.id}
                handleClick = {props.handleClick(item)}
            />
        ))}
    </div>
)

export default ProjectsGrid;