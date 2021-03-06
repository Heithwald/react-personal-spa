import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTransform } from "framer-motion";
import TextError from "./TextError";

// Form initial values
const initialValues = {
  name: "",
  lastName: "",
  gender: "",
  city: "",
  address: "",
  email: "",
  comments: "",
};

// Fields' validation schema for Yup
const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("This field is required"),
  city: Yup.string().required("This field is required"),
  address: Yup.string().required("This field is required"),
  gender: Yup.string().required("This field is required"),
  comments: Yup.string().required("This field is required"),
});

const onSubmit = (values) => {
  axios
    .post("http://localhost:8000/test", values)
    .then((response) => {
      console.log("Successfully posted:", response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  document.querySelector(".form-submit").innerText = "Form submitted";
  /* add code for clearing form fields <------------------------------------------------------------------------------- */
};

/* 
Formik works as a context provider. Inputs are automatically hooked up to the top level Formik component 
The "name" attribute is used to match-up with the Formik state. Renders an input element by default
*/

const UserForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="youtube-form">
        <div className="form-control">
          <label className="label" htmlFor="name">
            Name
          </label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="lastName">
            Last name
          </label>
          <Field type="text" id="lastName" name="lastName" />
          <ErrorMessage name="lastName" component={TextError} />
        </div>

        <div className="form-control">
          {/* #FIX inconsistent approach for handling empty default selection, check Formik docs/videos for a propes solution without warnings from React */}
          <label className="label" htmlFor="gender">
            Gender
          </label>
          <Field id="gender" name="gender" defaultValue={"default"} as="select">
            <option defaultValue disabled></option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Field>
          <ErrorMessage name="gender" component={TextError} />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="city">
            City
          </label>
          <Field type="text" id="city" name="city" />
          <ErrorMessage name="city" component={TextError} />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="address">
            Address
          </label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage name="address" component={TextError} />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="email">
            E-mail
          </label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="comments">
            Comments
          </label>
          <Field type="text" id="comments" name="comments" as="textarea" />
          <ErrorMessage name="comments" component={TextError} />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default UserForm;
