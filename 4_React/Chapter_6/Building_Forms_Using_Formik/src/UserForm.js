import React, { Component } from 'react';
//1. import the necessary Formik components that will be used.
import { Formik, Form, Field, ErrorMessage } from 'formik';
class UserForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Any place in your app!</h1>
                <Formik
                //2. populates the initial field values of the form
                    initialValues={{ email: '', password: '' }}
                    // the validate function to validate the form’s values
                    validate={values => {
                        const errors = {}; // first check if it's empty  - error message
                        if (!values.email) {
                            errors.email = 'Required';
                            // then check if it is valid
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        else if (values.email.length < 10) {
                            errors.email = 'Email address too short';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        }
                        else if (values.password.length < 8) {
                            errors.password = 'Password too short';
                        }
                        return errors;
                    }}

                    // pass in the form’s values and a promise which
                    // shows an alert box with the submitted form values in a JSON object
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => ( // Body of the form
                        <Form>
                            <Field type="email" name="email" />
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                <ErrorMessage name="email" component="div" />
                            </span>
                            <Field type="password" name="password" />
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                <ErrorMessage name="password" component="div" />
                            </span>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
export default UserForm;