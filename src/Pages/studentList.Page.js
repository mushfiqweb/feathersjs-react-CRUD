import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentList from '../Components/studentList';
import { fetchStudents, deleteStudent } from '../Actions/student.Actions';

class StudentListPage extends Component {

    componentDidMount() {
        this.props.fetchStudents();
    }

    render() {
        return (
            <div>
                <h1>List of Students</h1>
                <StudentList students={this.props.students} loading={this.props.loading} errors={this.props.errors} deleteStudent={this.props.deleteStudent} />
            </div>
        )
    }
}

// Make students  array available in  props
function mapStateToProps(state) {
    return {
        students: state.studentStore.students,
        loading: state.studentStore.loading,
        errors: state.studentStore.errors
    }
}

export default connect(mapStateToProps, { fetchStudents, deleteStudent })(StudentListPage);
