import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./registerpage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/LoginSlice";
import { Link } from "react-router-dom";

const Registerpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialvalues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const handleSubmit = (values) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
        confirmpassword: values.confirmpassword,
      })
    );

    navigate("/login", true);
  };

  const validation = Yup.object({
    email: Yup.string()
      .required("This field is required")
      .email("Enter a valid email"),
    name: Yup.string().required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .max(10, "maximum length should be 10")
      .min(5, "minimum length should be 5"),
    confirmpassword: Yup.string().required("This filed is required"),
  });
  return (
    <div className="form-div">
      <h2 className="text-center">Register</h2>
      <Formik
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={validation}
        validateOnMount
      >
        {(formik) => {
          return (
            <Form>
              <div className="form-group">
                <label>Name</label>
                <Field
                  type="text"
                  name="name"
                  className={
                    formik.touched.name && formik.errors.name
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                <ErrorMessage name="name">
                  {(errorMessage) => (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Email</label>
                <Field
                  type="text"
                  name="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                <ErrorMessage name="email">
                  {(errorMessage) => (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                <ErrorMessage name="password">
                  {(errorMessage) => (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Confirm password</label>
                <Field
                  type="password"
                  name="confirmpassword"
                  className={
                    formik.touched.confirmpassword &&
                    formik.errors.confirmpassword
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                <ErrorMessage name="confirmpassword">
                  {(errorMessage) => (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </ErrorMessage>
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
              <br></br>
              AlreadyRegistered?<Link to="/login">Click here...</Link>for login
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Registerpage;
