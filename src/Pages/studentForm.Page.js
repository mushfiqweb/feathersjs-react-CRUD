import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newStudent, saveStudent, fetchStudent, updateStudent, sendEmail } from '../Actions/student.Actions';
import StudentForm from '../Components/studentForm';


class StudentFormPage extends Component {

    state = {
        redirect: false
    }

    componentDidMount = () => {
        const { _id } = this.props.match.params;
        if (_id) {
            this.props.fetchStudent(_id)
        } else {
            this.props.newStudent();
        }
    }

    submit = (student) => {
        if (!student._id) {
            return this.props.saveStudent(student)
                .then(response => this.setState({ redirect: true }))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        } else {
            return this.props.updateStudent(student)
                .then(response => this.setState({ redirect: true }))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.redirect ?
                        <Redirect to="/home" /> :
                        <StudentForm student={this.props.student} loading={this.props.loading} onSubmit={this.submit} sendEmail={this.props.sendEmail} emailed={this.props.emailed}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        student: state.studentStore.student,
        errors: state.studentStore.errors,
        emailed: state.studentStore.emailed
    }
}

export default connect(mapStateToProps, { newStudent, saveStudent, fetchStudent, updateStudent, sendEmail })(StudentFormPage);
