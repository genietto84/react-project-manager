import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './index.css';

class ProjectsHeader extends React.Component {
    getTitle() {
        if (this.props.location.pathname==='/projects')
            return 'I miei progetti';
        else if (this.props.location.pathname==='/projects/add')
            return 'Nuovo progetto';
        else if ((this.props.location.pathname).search('/projects/details') >= 0)
            return 'Dettagli progetto';
        else if ((this.props.location.pathname).search('/projects/update') >= 0)
            return 'Aggiorna progetto';
    }
    getButtonText = () => {
        if (this.props.location.pathname==='/projects') return 'Aggiungi progetto';
        else return 'Torna a progetti';
    }
    handlePress = () => {
        if (this.props.location.pathname==='/projects') this.props.history.push('/projects/add');
        else this.props.history.push('/projects');
    }
    render() {
        return (
            <div className='ProjectsHeader'>
                <h1>
                    {this.getTitle()}
                </h1>
                <Button
                    onClick={this.handlePress}
                    basic={this.props.location.pathname==='/projects' ? false : true}
                >
                    {this.getButtonText()}
                </Button>
            </div>
        )
    }
}

export default withRouter(ProjectsHeader);