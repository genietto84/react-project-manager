import React from 'react';
import ProjectsHeader from './ProjectsHeader';
import ProjectsGrid from './ProjectsGrid';
import projects from './projects';

class Projects extends React.Component {
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
            <div className="Projects">
                <ProjectsHeader title='I miei progetti' buttonText='Aggiungi progetto' />
        
                <ProjectsGrid
                    projects = {this.state.projects}
                    handleClick = {this.handleClick}
                />
            </div>
        )
    }
}

export default Projects;