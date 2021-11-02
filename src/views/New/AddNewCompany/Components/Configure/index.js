import React, { Component, Fragment } from "react";
import img1 from "../../../../../images/img2.png";
import logo from "../../../../../images/logo.png";
import SVG from "react-inlinesvg";
import icon from "../../../../../images/Group 3713.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";

import Steps from "../Steps";
import Styles from "./style.module.css";

const validationSchema = yup.object({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  phone: yup.string().required(),
  email: yup.string().required().email(),
});

export const Configure = ({ formData, setFormData, nextStep }) => {
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
          <div className={`${Styles.secPadd} w-75 m-auto`}>
            {/* <div className={Styles.rotateSvg}>
              <SVG src={icon} title="back" />
            </div> */}
            <div className="text-center mb-4">
              <h4 className={Styles.headTxt}>
                Complete the following Steps to Configure Your Account
              </h4>
            </div>
            <Formik
              initialValues={formData}
              onSubmit={(values) => {
                setFormData(values);
                nextStep();
              }}
              validationSchema={validationSchema}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className={`${Styles.labelSt} form-label`}>
                          First Name
                        </label>
                        <Field
                          type="text"
                          name="firstName"
                          className={Styles.inputSt}
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className={`${Styles.labelSt} form-label`}>
                          Last Name
                        </label>
                        <Field
                          type="text"
                          name="lastName"
                          className={Styles.inputSt}
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className={`${Styles.labelSt} form-label`}>
                      Phone Number
                    </label>
                    <Field
                      type="text"
                      name="phone"
                      className={Styles.inputSt}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label className={`${Styles.labelSt} form-label`}>
                      Email
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
                  <div className="w-75 text-center m-auto">
                    <button
                      type="submit"
                      variant="contained"
                      className={`${Styles.btnSt} btn `}
                    >
                      Continue
                    </button>
                    <Steps configure="configure" />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Configure.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
