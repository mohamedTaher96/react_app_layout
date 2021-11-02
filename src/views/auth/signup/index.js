import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../images/img11.png";
import logo from "../../../images/logo.png";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Styles from "./style.module.css";

export default class SignUp extends Component {
  render() {
    return (
      <Fragment>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="position-relative">
              <img src={img1} alt="img1" className={Styles.imgSt} />
              <img src={logo} alt="img1" className={Styles.logoSt} />
            </div>
          </div>

          <div className="col-md-6">
            <div className="w-75 m-auto">
              <div className="text-center mb-4">
                <h4 className={Styles.headTxt}>Sign Up</h4>
                <div className={Styles.secTxt}>
                  <span>Already Have An Account?</span>&nbsp;
                  <Link to="/login">Log in</Link>
                </div>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={yup.object().shape({
                  email: yup.string().required().email(),
                  password: yup
                    .string()
                    .required("Please Enter your password")
                    .matches(
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                    ),
                  confirmPassword: yup
                    .string()
                    .oneOf([yup.ref("password"), null], "Passwords must match"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(async () => {
                    alert(JSON.stringify(values, null, 2));
                    // this.props.history.push("/login");
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <label className={`${Styles.labelSt} form-label`}>
                        Email Address
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className={Styles.inputSt}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label className={`${Styles.labelSt} form-label`}>
                        Enter Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className={Styles.inputSt}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label className={`${Styles.labelSt} form-label`}>
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        className={Styles.inputSt}
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${Styles.btnSt} btn`}
                    >
                      Start Managing
                    </button>
                  </Form>
                )}
              </Formik>

              <div className={Styles.termsPolicy}>
                By Joining. You Agree To The{" "}
                <span className={Styles.underLine}>Terms</span> And{" "}
                <span className={Styles.underLine}>Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
