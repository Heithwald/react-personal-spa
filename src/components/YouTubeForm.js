import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  lastName: "",
  city: "",
  email: "",
};

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

const onBlur = () => {};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("This field is required"),
  city: Yup.string().required("This field is required"),
  gender: Yup.string().required("This field is required"),
});

const YouTubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    onBlur,
    validationSchema,
  });

  return (
    <form className="youtube-form" onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-control">
        <label className="label" htmlFor="lastName">
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div className="form-control">
        {/* #FIX something is wrong - form can be submitted even if the field was not touched and left with a default empty/disabled value. Formik thinks it has a default value anyway */}
        <label className="label" htmlFor="gender">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          defaultValue={"default"}
          {...formik.getFieldProps("gender")}
        >
          <option value="default" disabled></option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        {formik.touched.gender && formik.errors.gender ? (
          <div className="error">{formik.errors.gender}</div>
        ) : null}
      </div>

      <div className="form-control">
        <label className="label" htmlFor="city">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          {...formik.getFieldProps("city")}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="error">{formik.errors.city}</div>
        ) : null}
      </div>

      <div className="form-control">
        <label className="label" htmlFor="email">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default YouTubeForm;
