import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.css';

class Home extends React.Component {
    goToProjects = () => { this.props.history.push('/projects') };
    render() {
        return (
            <div className="Home">
                <img src="/logo.svg" alt=""/>
                <h1>
                    Welcome to Project Manager
                </h1>
                <div>
                    <Button basic size='huge' onClick={this.goToProjects}>
                        All projects
                    </Button>
                    <Button size='huge'>
                        Add project
                    </Button>
                </div>
            </div>   
        )
    }
}

export default Home;