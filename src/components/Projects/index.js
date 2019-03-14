import React from 'react';
import { Route } from "react-router-dom";
import ProjectsHeader from './ProjectsHeader';
import ProjectsGrid from './ProjectsGrid';
import ProjectInsert from './ProjectInsert';
import ProjectDetails from './ProjectDetails';
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
    addProject = item => {
        this.setState(state => ({ projects: [...state.projects, item] }));
        this.props.history.push(`/projects`);
    }
    goToDetails = id => () => {
        this.props.history.push(`/projects/details/${id}`);
    }
    getSelectedProject = _id => this.state.projects.find(({id}) => id===_id);
    render() {
        return (
            <div className="Projects">
                <ProjectsHeader title='I miei progetti' buttonText='Aggiungi progetto' />
        
                <Route exact path="/projects" render={() => (
                    <ProjectsGrid
                        projects = {this.state.projects}
                        goToDetails = {this.goToDetails}
                    />
                )} />
                <Route path="/projects/add" render={() => (
                    <ProjectInsert addProject={this.addProject} />
                )} />
                <Route path="/projects/details/:id" render={(props) => (
                    <ProjectDetails
                        project={this.getSelectedProject(props.match.params.id)}
                    />
                )} />
            </div>
        )
    }
}

export default Projects;