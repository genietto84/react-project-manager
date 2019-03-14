import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import './style.css';

const ProjectForm = props => (
    <div className='ProjectForm'>
        <Form onSubmit={props.handleSubmit}>
            <div className='row'>
                <div className="field">
                    <label>
                        Name
                        <input
                            type="text"
                            name='name'
                            value={props.name}
                            onChange={props.handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="field">
                    <label>
                        Priority:
                        <select
                            name='priority'
                            value={props.priority}
                            onChange={props.handleChange}
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

            <div className="field">
                <label>
                    Description:
                    <textarea
                        name='description'
                        value={props.description}
                        onChange={props.handleChange}
                        required
                    />
                </label>
            </div>

            <div className="field">
                <label>
                    Start:
                    <input
                        type="date"
                        name='start'
                        value={props.start}
                        onChange={props.handleChange}
                        required
                    />
                </label>
            </div>

            <div className="buttonContainer">
                <Button type="submit" color='green'>
                    Crea
                </Button>
            </div>
        </Form>
    </div>
);

export default ProjectForm;