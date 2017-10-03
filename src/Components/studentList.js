import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import StudentCard from './studentCard';

export default function StudentList({ students, loading, errors, deleteStudent }) {

    const loadingMessage = (
        <Message icon info>
            <Icon name='circle notched' loading />
            <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that Student for you.
       </Message.Content>
        </Message>
    )

    const emptyMessage = (
        <Message icon info>
            <Icon name='warning circle' />
            <Message.Content>
                <Message.Header>No students Found</Message.Header>
                <p>Add some new students to get started.</p>
                <Link to={'/addnew'} className="ui button primary">Add New student</Link>
            </Message.Content>
        </Message>
    )

    const timeoutMessage = (
        <Message icon negative>
            <Icon name='wait' />
            <Message.Content>
                <Message.Header>{errors.global}</Message.Header>
                Is the backend server running?
       </Message.Content>
        </Message>
    )

    const cards = () => {
        return students.map(student => {
            return (
                <StudentCard key={student._id} student={student} deleteStudent={deleteStudent} />
            )
        })
    }

    const studentList = (
        <Card.Group>
            {cards()}
        </Card.Group>
    )

    return (
        <div>
            {loading && loadingMessage}
            {students.length === 0 && !loading && !errors.global && emptyMessage}
            {errors.global && timeoutMessage}
            {students.length > 0 && studentList}
        </div>
    )
}
