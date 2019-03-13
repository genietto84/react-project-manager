import React from 'react';
import { ProjectCard } from '../../_common';
import './index.css';
import projects from './projects';

class ProjectsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { projects };
    }
    handleClick = project => () => {
        console.log(this, project)
    }
    render() {
        return (
            <div className='ProjectsGrid'>
                {this.state.projects.map(item => (
                    <ProjectCard
                        item = {item}
                        key = {item.id}
                        handleClick = {this.handleClick(item)}
                    />
                ))}
            </div>
        )
    }
}

export default ProjectsGrid;