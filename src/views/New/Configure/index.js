import React, { Component, Fragment } from "react";
import img1 from "../../../images/img2.png";
import logo from "../../../images/logo.png";
import SVG from "react-inlinesvg";
import icon from "../../../images/Group 3713.svg";

import Styles from "./style.module.css";
import Steps from "../Steps";

export default class Configure extends Component {
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
              <div className={Styles.rotateSvg}>
                <SVG src={icon} title="back" />
              </div>
              <div className="text-center mb-4">
                <h4 className={Styles.headTxt}>
                  Complete the following Steps to Configure Your Account
                </h4>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className={`${Styles.labelSt} form-label`}>
                      First Name
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className={`${Styles.labelSt} form-label`}>
                      Last Name
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className={`${Styles.labelSt} form-label`}>
                  Phone Number
                </label>
                <input type="text" className={Styles.inputSt} />
              </div>
              <div className="mb-3">
                <label className={`${Styles.labelSt} form-label`}>Email</label>
                <input type="email" className={Styles.inputSt} />
              </div>

              <div className="w-75 text-center m-auto">
                <button type="submit" className={`${Styles.btnSt} btn `}>
                  Continue
                </button>
                <Steps configure="configure" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
