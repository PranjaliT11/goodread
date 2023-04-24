
import React, { useState } from 'react';
import styles from "./style.css";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";

const RegisterPage = () => {
    const [responseData, setResponseData] = useState({
        responseText:"",
        responseClass:"",
    })
    // initial values
    const initialValues = {
        firstname:"",
        name: "",
        email: "",
        password: ""
    };
    // submit form data
    const onSubmit = (values) => {
        
            axios.post("http://orca-app-jhg41.ondigitalocean.app/api/auth/register",values)
            .then((response) => {
                setResponseData({
                    responseText: "response.data.message",
                    responseClass: "alert alert-success",
                });

            }, (error) => {
                setResponseData({
                    responseText: "Register Failed",
                    responseClass: "alert alert-danger",
                })

            })
            .catch(error => console.log(error))
           
       
    };   
    
    // handle form validation
    const validationSchema = Yup.object({
        name: Yup.string().required("name is required"),
        email: Yup.string().
            required("email is required")
            .email("email is not valid"),
        passsword: Yup.string()
            .required("password is required")
            .min(6, "password must be at least 6 characters")
    })


const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: false

});
return (
    <div className="container">
        <div className='row'>
            <div className="col-md-3">
                <div className="col-md-6">
                    <div className={styles.wrapper}>
                        <h2>Register</h2>
                        <hr />
                        <Form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='name'>Name</label>

                                <input type="text" id="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className=
                                    {formik.touched.name && formik.errors.name ? 'form-control is-invalid' : 'form-control'} />

                                {formik.touched.name && formik.touched.name && formik.errors.name ? (
                                    <small className='text-danger'>{formik.errors.name}</small>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email</label>
                                <input type="text" id="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.email && formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"}

                                />
                                {formik.touched.email && formik.errors.email ? (<small className='text-danger'>{formik.errors.email}</small>) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor='password'>Password</label>
                                <input type="password" id="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} />
                                {formik.errors.password ? (<small className='text-danger'>{formik.errors.password}</small>) : null}
                            </div>
                            <input type="submit"
                                value="Register"
                                disabled={!formik.isValid}
                                className="btn btn-primary btn-block" />
                        </Form>
                        <br />
                        <p className='text-center'>Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
    </div>
)
 }
export default RegisterPage;