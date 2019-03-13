import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import './style.css';

const getDate = (start, end) => {
    let date = start;
    if (end) date += ' | ' + end;
    return date;
}

const ProjectCard = props => {
    if (!props.item) return null;
    const color = props.item.done ? 'green' : null;
    return (
        <Card className='ProjectCard' color={color}>
            <Card.Content>
                <Card.Header>
                    {props.item.name}
                </Card.Header>
                <Card.Meta>
                    {getDate(props.item.start, props.item.end)}
                </Card.Meta>
                <Card.Description>
                    {props.item.description}
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button fluid onClick={props.handleClick} color={color}>
                    Switch stato
                </Button>
            </Card.Content>
        </Card>
    );
}

export default ProjectCard;
