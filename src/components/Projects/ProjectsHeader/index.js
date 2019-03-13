import React from 'react';
import { Button } from 'semantic-ui-react';
import './index.css';

const ProjectsHeader = props => (
    <div className='ProjectsHeader'>
        <h1>
            {props.title}
        </h1>
        <Button>
            {props.buttonText}
        </Button>
    </div>
);

export default ProjectsHeader;