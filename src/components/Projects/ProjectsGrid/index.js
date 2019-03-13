import React from 'react';
import { ProjectCard } from '../../_common';
import './index.css';

const ProjectsGrid = props => (
    <div className='ProjectsGrid'>
        <ProjectCard
            item={{
                name: 'Progetto Alpha',
                start: '2019-03-31',
                end: '2019-06-15',
                description: 'Lorem ipsum dolor sit amet.',
                priority: 'medium',
                done: true,
            }}
        />
        <ProjectCard
            item={{
                name: 'Progetto Beta',
                start: '2019-03-31',
                end: '2019-06-15',
                description: 'Lorem ipsum dolor sit amet.',
                priority: 'low',
                done: true,
            }}
        />
        <ProjectCard
            item={{
                name: 'Progetto Gamma',
                start: '2019-03-31',
                end: '2019-06-15',
                description: 'Lorem ipsum dolor sit amet.',
                priority: 'low',
                done: true,
            }}
        />
        <ProjectCard
            item={{
                name: 'Progetto Delta',
                start: '2019-03-31',
                description: 'Lorem ipsum dolor sit amet.',
                priority: 'low',
                done: false,
            }}
        />
    </div>
);

export default ProjectsGrid;