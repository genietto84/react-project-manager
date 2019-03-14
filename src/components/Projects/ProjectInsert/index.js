import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './index.css';

class ProjectInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            priority: ''
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
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <div className='ProjectForm'>
                    <Form onSubmit={this.handleSubmit}>
                        <div className='row'>
                            <div className="field">
                                <label>
                                    Name
                                    <input
                                        type="text"
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="field">
                                <label>
                                    Priority:
                                    <select
                                        name='priority'
                                        value={this.state.priority}
                                        onChange={this.handleChange}
                                        required
                                    >
                                        <option value='' disabled>Select priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>    
                                </label>
                            </div>
                        </div>

                        <div className="buttonContainer">
                            <Button type="submit" color='green'>
                                Crea
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default ProjectInsert;