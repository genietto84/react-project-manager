import React from 'react';
import { Route } from "react-router-dom";
import ProjectsHeader from './ProjectsHeader';
import ProjectsGrid from './ProjectsGrid';
import ProjectInsert from './ProjectInsert';
import ProjectDetails from './ProjectDetails';
import ProjectUpdate from './ProjectUpdate';
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
    goToUpdate = id => () => {
        this.props.history.push(`/projects/update/${id}`);
    }
    getSelectedProject = _id => this.state.projects.find(({id}) => id===_id);
    updateProject = project => {
        const projects = this.state.projects.map(item => {
            if (project.id === item.id)
                return {
                    ...item,
                    ...project,
                    done: project.end ? true : false
                }
            else return item;
        })
        this.setState({ projects });
        this.props.history.push(`/projects/details/${project.id}`);
    }
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
                        goToUpdate={this.goToUpdate(props.match.params.id)}
                    />
                )} />
                <Route path="/projects/update/:id" component={(props) => (
                    <ProjectUpdate
                        project={this.getSelectedProject(props.match.params.id)}
                        updateProject={this.updateProject}
                        handleCancel={this.goToDetails(props.match.params.id)}
                    />
                )} />
            </div>
        )
    }
}

export default Projects;