import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../images/img11.png";
import logo from "../../../images/logo.png";
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
                  <Link to="/userform">Login</Link>
                </div>
              </div>
              <div className="mb-3">
                <label className={`${Styles.labelSt} form-label`}>
                  Email Address
                </label>
                <input type="email" className={Styles.inputSt} />
              </div>
              <div className="mb-3">
                <label className={`${Styles.labelSt} form-label`}>
                  Enter Password
                </label>
                <input type="password" className={Styles.inputSt} />
              </div>
              <div className="mb-3">
                <label className={`${Styles.labelSt} form-label`}>
                  Confirm Password
                </label>
                <input type="password" className={Styles.inputSt} />
              </div>
              <button type="submit" className={`${Styles.btnSt} btn`}>
                Start Managing
              </button>
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
