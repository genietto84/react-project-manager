import React from 'react';
import './index.css';

const ProjectsHeader = props => (
    <div className='ProjectsHeader'>
        <h1>
            {props.title}
        </h1>
        <button>
            {props.buttonText}
        </button>
    </div>
);

export default ProjectsHeader;