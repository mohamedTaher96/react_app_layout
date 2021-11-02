import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../../../images/pexels-olya-kobruseva-8962444.jpg";
import logo from "../../../../../images/logo.png";
import Styles from "./style.module.css";

export const Done = () => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="position-relative">
          <img src={img1} alt="img1" className={Styles.imgSt} />
          <img src={logo} alt="img1" className={Styles.logoSt} />
        </div>
      </div>

      <div className="col-md-6">
        <div className="m-auto">
          <div className="text-center mb-4">
            <h4 className={Styles.headTxt}>Success</h4>
            <h1 className={Styles.secTxt}>Thanks for adding your company</h1>
            <div className="mt-4">
              <Link to="/companies" className={`${Styles.btnSt} btn`}>
                Go to your companies page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
