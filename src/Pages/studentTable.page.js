import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { fetchStudents } from '../Actions/student.Actions';
import StudentTable from '../Components/studentTable';

class StudentTablePage extends Component {

    componentDidMount = () => {

        if (this.props.students.length === 0) {
            this.props.fetchStudents();
        }
    }


    render() {
        return (
            <div>
                <Segment color='green'>
                    <Dimmer active={this.props.loading} inverted>
                        <Loader size='small'> Loading Students... </Loader>
                    </Dimmer>
                    <StudentTable students={this.props.students} isloading={this.props.loading} />
                </Segment>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        students: state.studentStore.students,
        loading: state.studentStore.loading,
        errors: state.studentStore.errors
    }
}

export default connect(mapStateToProps, { fetchStudents })(StudentTablePage);