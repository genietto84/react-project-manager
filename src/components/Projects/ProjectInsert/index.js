import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class ProjectInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
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
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <Button type="submit" color='green'>
                        Crea
                    </Button>
                </form>
            </div>
        );
    }
}

export default ProjectInsert;