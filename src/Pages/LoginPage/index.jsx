import React from "react";
import { useFormik, Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import styles from './style.css';
import axios from "axios";
import { Link, Navigate } from "react-router-dom";


const LoginPage = () => {
    const [responseData, setResponseData] = useState({
        responseText: '',
        responseClass: '',
    })
    const initialValues = {
        email: '',
        password: '',


    };
    const onSubmit = (values) => {
        axios
            .post('http://orca-app-jhg41.ondigitalocean.app/api/auth/login', values)
            .then(response => {
                console.log(response);
                localStorage.setItem("token", response.data.token);
                setResponseData({
                    responseClass: "aler alert-success",
                    responseText: "login success,thank you"
                });
                navigate('/')

            }, (error) => {
                console.log(error);
                setResponseData({
                    responseClass: "alert alert-danger",
                    responseData: error.response.data.message
                });
            })
            .catch(error => {
                console.log(error);
            })




    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Must be a valid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, 'password must be at least 6 characters')
            .required("Password is required")

    });


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 className="text-center">
                        <Link to="/">
                            GoodRead
                        </Link>
                    </h2>

                    <div className={styles.wrapper}>
                        <div className={responseData.responseClass}>
                            {responseData.responseText}
                        </div>
                        <h2>Login</h2>
                        <hr />
                        <Formik
                            initialvalues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnMount>
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="text"
                                        name="email"
                                        className="form-control"
                                    />
                                    <ErrorMessage name="email">
                                        {(errormessage) => (
                                            <small className="text-danger">{errormessage}</small>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        className="form-control"
                                    />
                                    <ErrorMessage name="password">
                                        {(errormessage) => (
                                            <small className="text-danger">{errormessage}</small>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <input type="submit" value="login" className="btn btn-primary btn btn-block" />
                            </Form>
                        </Formik>
                        <br />
                        <p className="text-center">
                            Don't have an account <a href="/register">Register</a>
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default LoginPage;