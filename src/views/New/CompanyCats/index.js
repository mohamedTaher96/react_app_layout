import React, { Component, Fragment } from "react";
import Navbar from "../Navbar";
import SVG from "react-inlinesvg";
import bg from "../../../images/svg/Ellipse 411.png";
import icon1 from "../../../images/svg/download.svg";
import icon2 from "../../../images/svg/ratio.svg";
import icon3 from "../../../images/svg/data-analysis.svg";
import icon4 from "../../../images/svg/stats.svg";
import icon5 from "../../../images/svg/bulb.svg";
import icon6 from "../../../images/svg/comparative.svg";
import icon7 from "../../../images/svg/cash-flow.svg";
import icon8 from "../../../images/svg/statistics.svg";

import icon9 from "../../../images/svg/incomes.svg";

import Styles from "./style.module.css";

export default class CompanyCats extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={Styles.divSty}>
                <div className={`${Styles.iconSt}`}>
                  <SVG src={icon1} />
                </div>
                <div>
                  <span>Input</span>
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={Styles.divSty}>
                <div className={`${Styles.iconSt}`}>
                  <SVG src={icon2} />
                </div>
                <div>
                  <span>Ratios Data</span>
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={Styles.divSty}>
                <div className={`${Styles.iconSt3}`}>
                  <SVG src={icon3} />
                </div>
                <div>
                  <span>Ratios Analysis</span>
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={Styles.divSty}>
                <div className={`${Styles.iconSt}`}>
                  <SVG src={icon4} />
                </div>
                <div>
                  <span>Growth Rate</span>
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={Styles.divSty}>
                <div className={`${Styles.iconSt5}`}>
                  <SVG src={icon5} />
                </div>
                <div>
                  <span>Common Size</span>
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={Styles.divSty}>
                <div className={`${Styles.iconSt}`}>
                  <SVG src={icon6} />
                </div>
                <div>
                  <span>Comparing</span>
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={Styles.divSty}>
                <div className={`${Styles.iconSt7}`}>
                  <SVG src={icon7} />
                </div>
                <div>
                  <span>Cash flow</span>
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={Styles.divSty}>
                <div className={`${Styles.iconSt}`}>
                  <SVG src={icon8} />
                </div>
                <div>
                  <span>Graphs</span>
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={Styles.divSty}>
                <div className={`${Styles.iconSt}`}>
                  <SVG src={icon9} />
                </div>
                <div>
                  <span>Income</span>
                  <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
