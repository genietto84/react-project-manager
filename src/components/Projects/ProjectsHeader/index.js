import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './index.css';

const ProjectsHeader = props => (
    <div className='ProjectsHeader'>
        <h1>
            {props.title}
        </h1>
        <Link to='/projects/add'>
            <Button>
                {props.buttonText}
            </Button>
        </Link>
    </div>
);

export default ProjectsHeader;