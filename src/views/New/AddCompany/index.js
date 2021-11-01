import React, { Component, Fragment } from "react";
import img1 from "../../../images/img3.png";
import logo from "../../../images/logo.png";
import SVG from "react-inlinesvg";
import icon from "../../../images/Group 3713.svg";

import Styles from "./style.module.css";
import Steps from "../Steps";

export default class AddCompany extends Component {
  render() {
    return (
      <Fragment>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="position-relative">
              <img src={img1} alt="img1" className={Styles.imgSt} />
              <img src={logo} alt="img1" className={Styles.logoSt} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="w-75 m-auto">
              <div className={Styles.rotateSvg}>
                <SVG src={icon} title="back" />
              </div>
              <div className="text-center mb-4">
                <h4 className={Styles.headTxt}>Add Company Info</h4>
                <div className={Styles.secTxt}>
                  <span>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2">
                    <label className={`${Styles.labelSt} form-label`}>
                      Company Name
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <label className={`${Styles.labelSt} form-label`}>
                      Registry Number
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <label className={`${Styles.labelSt} form-label`}>
                      Country
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <label className={`${Styles.labelSt} form-label`}>
                      City
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <label className={`${Styles.labelSt} form-label`}>
                      Industries
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <label className={`${Styles.labelSt} form-label`}>
                      Financial year-end
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="mb-2">
                    <label className={`${Styles.labelSt} form-label`}>
                      Currency
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="mb-2">
                    <label className={`${Styles.labelSt} form-label`}>
                      Start Date
                    </label>
                    <input type="date" className={Styles.inputSt} />
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="mb-3">
                    <label className={`${Styles.labelSt} form-label`}>
                      Corporate tax rate
                    </label>
                    <input type="text" className={Styles.inputSt} />
                  </div>
                </div>
              </div>

              <div className="w-75 text-center m-auto">
                <button type="submit" className={`${Styles.btnSt} btn `}>
                  Continue
                </button>
                <Steps addCompany="addcompany" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
