import React, { Component } from 'react';
import { ProjectForm } from '../../_common';

class ProjectUpdate extends Component {
    constructor(props) {
        super(props);
        if (props.project)
            this.state = {
                id: this.props.project.id,
                name: this.props.project.name,
                priority: this.props.project.priority,
                description: this.props.project.description,
                start: this.props.project.start,
                end: this.props.project.end ? this.props.project.end : ''
            };
    }
    handleChange = event => {
        if (event) {
            const { name, value } = event.target;
            this.setState({[name]: value});
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.updateProject({ ...this.state });
    }
    render() {
        if (!this.props.project) return null;
        return (
            <div>
                <ProjectForm
                    { ...this.state }
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleCancel={this.props.handleCancel}
                />
            </div>
        );
    }
}

export default ProjectUpdate;
