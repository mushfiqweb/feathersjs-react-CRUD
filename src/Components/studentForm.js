import React, { Component } from 'react';
import { Form, Grid, Button, Input, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
    const errors = { name: {} };
    if (!values.name || !values.name.first) {
        errors.name.first = {
            message: 'You need to provide First Name'
        }
    }
    if (!values.phone) {
        errors.phone = {
            message: 'You need to provide a Phone number'
        }
    } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
        errors.phone = {
            message: 'Phone number must be in International format'
        }
    }
    if (!values.email) {
        errors.email = {
            message: 'You need to provide an Email address'
        }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = {
            message: 'Invalid email address'
        }
    }
    return errors;
}

class StudentForm extends Component {
    state = {
        email: ''
    }

    componentWillReceiveProps = (nextProps) => {
        const { student } = nextProps;
        if (student._id !== this.props.student._id) {
            this.props.initialize(student)
        }
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({ error: touched && error })}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    )

    sendEmail = () => {
        var self = this;
        let std = this.props.student;

        var emailContent = {
            email: self.state.email,
            emailSubject: 'email from featherjs CRUD App',
            emailInText: 'Student Name is :' + std.name.first + ' ' + std.name.last,
            emailInHTML: 'Student Name is :' + std.name.first + ' ' + std.name.last
            
        }
        
        this.props.sendEmail(JSON.stringify(emailContent));
    }

    OnBlur = (e, data) => {
        var self = this;
        self.setState({
            email: e.target.value
        });
    }

    render() {
        const { handleSubmit, pristine, submitting, loading, student } = this.props;
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <h1 style={{ marginTop: "1em" }}>{student._id ? 'Edit student' : 'Add New student'}</h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Form.Group widths='equal'>
                            <Field name="name.first" type="text" component={this.renderField} label="First Name" />
                            <Field name="name.last" type="text" component={this.renderField} label="Last Name" />
                        </Form.Group>

                        <Field name="class" type="text" component={this.renderField} label="Class" />
                        <Field name="rank" type="text" component={this.renderField} label="Rank" />
                        <Field name="mark" type="number" component={this.renderField} label="Mark" />

                        <Field name="phone" type="text" component={this.renderField} label="Phone" />
                        <Field name="email" type="text" component={this.renderField} label="Email" />
                        <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
                    </Form>

                    <Divider/>
                    <Input type='text' placeholder='You email' onBlur={this.OnBlur} />

                    <Button onClick={this.sendEmail}>
                        Email me
                    </Button>

                    <div>
                        {this.props.emailed?<p>Sent</p>:<p>Not Sent</p>}
                    </div>                    
                </Grid.Column>
            </Grid>
        )
    }
}

export default reduxForm({ form: 'student', validate })(StudentForm);
