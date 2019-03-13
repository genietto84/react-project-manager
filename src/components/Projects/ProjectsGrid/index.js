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
        const projects = this.state.projects.map(item => {
            if (item.id === project.id)
                return {
                    ...item,
                    done: !item.done
                }
            else return item;
        });
        this.setState({ projects});
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