import React from 'react';
import PropTypes from 'prop-types'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function StudentCard({ student, deleteStudent }) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name='user outline' /> {student.name.first} {student.name.last}
                </Card.Header>
                <Card.Description>
                    <p><Icon name='phone' /> {student.phone}</p>
                    <p><Icon name='mail outline' /> {student.email}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Link to={`/student/${student._id}`} className="ui basic button green">Edit</Link>
                    <Button basic color="red" onClick={() => deleteStudent(student._id)} >Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}

StudentCard.propTypes = {
    student: PropTypes.object.isRequired
}
