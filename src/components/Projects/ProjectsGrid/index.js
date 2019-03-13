import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const ProjectsGrid = props => (
    <div className='ProjectsGrid'>
        <Card>
            <Card.Content>
                <Card.Header>
                    Progetto Alpha
                </Card.Header>
                <Card.Meta>
                    2019-10-10 | 2019-10-11
                </Card.Meta>
                <Card.Description>
                    dksksadjdsajk kljdsakljsd akljd lkas
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button fluid>
                    Fai Qualcosa
                </Button>
            </Card.Content>
        </Card>
    </div>
);

export default ProjectsGrid;