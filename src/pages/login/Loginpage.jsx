import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../register/registerpage.css";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUserData } from "../../redux/LoginSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialvalues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    if (
      userData.email === values.email &&
      userData.password === values.password
    ) {
      const data = { email: values.email, password: values.password };
      dispatch(login(data));
      alert("Login successfully");
      navigate("/home", true);
    } else {
      alert("Invalid email amd password,Try again");
    }
  };

  const validation = Yup.object({
    email: Yup.string()
      .required("This field is required")
      .email("Enter a valid email"),
    password: Yup.string()
      .required("This field is required")
      .max(10, "maximum length should be 10")
      .min(5, "minimum length should be 5"),
  });

  return (
    <div className="form-div">
      <h2>Login</h2>
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
              <input
                type="submit"
                // value="Login"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
              <br></br>
              New User?<Link to="/">Click here...</Link>for Register
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Loginpage;
