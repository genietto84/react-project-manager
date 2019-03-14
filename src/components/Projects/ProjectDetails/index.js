import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.css';

const ProjectDetails = props => {
    if (!props.project) return null;
    return (
        <div className='ProjectDetails'>
            <h1>
                {props.project.name}
                <span>{` (${props.project.id})`}</span>
            </h1>
            <p className='description'>{props.project.description}</p>
    
            <hr/>
    
            <p>
                Data Inizio: {' ' + props.project.start}
                <br/>
                {props.project.end &&
                    `Data Fine: ${props.project.end}`
                }
            </p>
    
            <div className="buttonContainer">
                <Button color='green' onClick={props.goToUpdate}>
                    Modifica
                </Button>
            </div>
        </div>
    );
}

export default ProjectDetails;