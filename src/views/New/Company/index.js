import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../images/Qatar_National_Bank_Logo.svg.png";

import Navbar from "../Navbar";
import Styles from "./style.module.css";

export default class Company extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <Link to="/companycategories">
                <div className={Styles.divSty}>
                  <img src={img1} alt="company" />
                  <span>Qatar Nasr Bank</span>
                  <div>
                    Finance Industry for money and cash flow , managing money
                    and more
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4  col-sm-6 mb-4">
              <Link to="/companycategories">
                <div className={Styles.divSty}>
                  <img src={img1} alt="company" />
                  <span>Qatar Nasr Bank</span>
                  <div>
                    Finance Industry for money and cash flow , managing money
                    and more
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4  col-sm-6 mb-4">
              <Link to="/addnewcompany">
                <div className={Styles.divSty}>
                  <i className="fas fa-plus-circle"></i>
                  <span>Add Company</span>
                  <div>Add Company Description</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
