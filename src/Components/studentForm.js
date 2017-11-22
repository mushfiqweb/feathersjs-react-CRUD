import React, { Component } from 'react';
import { Form, Grid, Button, Input, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

import AddBankComponent from "../Components/addBankComponent";

const validate = (values) => {
    const errors = { name: {} };
    if (!values.name || !values.name.first) {
        errors.name.first = {
            message: 'You need to provide First Name'
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
<<<<<<< HEAD
=======
    
>>>>>>> 76b77dbc48302f6562ded100c340d0fa81ff5a86
    componentWillReceiveProps = (nextProps) => {
        const { user } = nextProps;
        if (user._id !== this.props.user._id) {
            this.props.initialize(user)
        }
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({ error: touched && error })}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    )

    render() {
        const { handleSubmit, loading, user } = this.props;
        return (
            <Grid centered columns={2}>
                <Grid.Column>
<<<<<<< HEAD
                    <h1 style={{ marginTop: "1em" }}> Registration </h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Field name="name.first" type="text" component={this.renderField} label="First Name" />
                        <Field name="name.last" type="text" component={this.renderField} label="Last Name" />

                        <Field name="email" type="text" component={this.renderField} label="Email" />
                        <Button type='submit' >Submit</Button>
                    </Form>
=======
                    <Grid.Row>
                        <h1 style={{ marginTop: "1em" }}> Registration </h1>
                        <Form onSubmit={handleSubmit} loading={loading}>
                            <Field name="name.first" type="text" component={this.renderField} label="First Name" />
                            <Field name="name.last" type="text" component={this.renderField} label="Last Name" />
                            <Field name="email" type="text" component={this.renderField} label="Email" />
                            <Button primary type='submit'>Save</Button>
                        </Form>
                    </Grid.Row>
                    <Grid.Row>
                        <AddBankComponent/>
                    </Grid.Row>
>>>>>>> 76b77dbc48302f6562ded100c340d0fa81ff5a86
                </Grid.Column>
            </Grid>
        )
    }
}

export default reduxForm({ form: 'user', validate })(StudentForm);
