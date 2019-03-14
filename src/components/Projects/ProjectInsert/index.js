import React, { Component } from 'react';
import { ProjectForm } from '../../_common';

class ProjectInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            priority: '',
            description: '',
            start: ''
        }
    }
    handleChange = event => {
        if (event) {
            const { name, value } = event.target;
            this.setState({[name]: value});
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        const item = {
            id: Math.random().toString(36).replace('0.', '').substring(2, 9),
            ...this.state
        };
        this.props.addProject(item);
    }
    render() {
        return (
            <div>
                <ProjectForm
                    { ...this.state }
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default ProjectInsert;