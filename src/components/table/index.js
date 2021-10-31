import React, { Component, Fragment } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Empty from "./helpers/empty";

import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import overlayFactory from "react-bootstrap-table2-overlay";
import Styles from "./style.module.css";
import InlineSVG from "react-inlinesvg";
import { withTranslation } from "react-i18next";
import Export from "./helpers/export";

const CTable = (props) => {

  const handelChek = () => {
    alert("check all");
  };
  const onTableChange = (type, { sortField, sortOrder, data, page, sizePerPage }) => {
    if (type === "sort") {
      if (sortOrder === "asc") {
        data.sort((a, b) => {
          if (a[sortField]?.props?.children > b[sortField]?.props?.children) {
            return 1;
          } else if (b[sortField]?.props?.children > a[sortField]?.props?.children) {
            return -1;
          }
          return 0;
        });
      } else {
        data.sort((a, b) => {
          if (a[sortField]?.props?.children > b[sortField]?.props?.children) {
            return -1;
          } else if (b[sortField]?.props?.children > a[sortField]?.props?.children) {
            return 1;
          }
          return 0;
        });
      }
    } else if (type === "pagination") {
      props.handelPaginate(page, sizePerPage)
    }
  };
  const { t, coulms, rows, total, page, sizePerPage, tloading , result } = props
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      &nbsp;{t("showing")} {from} - {to} {t("of")} {size} {t(result)}
    </span>
  );

  const paginationOptions = {
    paginationSize: sizePerPage,
    pageStartIndex: page,
    totalSize: total,
    alwaysShowAllBtns: true, // Always show next and previous button
    prePageText: <div>{t("prev")}</div>,
    nextPageText: <div>{t("next")}</div>,
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "20",
        value: 20,
      },
      {
        text: "50",
        value: 50,
      },
      {
        text: "100",
        value: 100,
      },
    ],
  };

  return (
    <Fragment>
      <div
        className={`${Styles.marginSt} card card-custom gutter-b container`}
      >
        <div className="card-body">
          <div className="">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark"> {t("Courses")} </span>
            </h3>
            <div className=" d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center justify-content-around mb-5">
                <div className="input-icon">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("Search...")}
                    style={{ minWidth: "300px" }}
                    value={props?.search}
                    onChange={(e) => { props.handelSearch(e.target.value) }}
                  />
                  <span className="svg-icon svg-icon-2x">
                    <InlineSVG src={`${process.env.REACT_APP_API_URl}/images/svg/Search.svg`} title="search" />
                  </span>
                </div>
                <div
                  href="/"
                  className="btn btn-light-primary px-6 font-weight-bold mr-2 ml-2"
                >
                  {t("Search")}
                </div>
              </div>
              <div className="">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="card-toolbar d-flex">
                    {/* <Export t={t} /> */}
                    <div>
                      {props.newBtn}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BootstrapTable
          wrapperClasses="table-responsive"
          loading={tloading}
          bordered={false}
          classes="table table-head-custom table-vertical-center"
          remote
          keyField="id"
          data={rows}
          columns={coulms}
          selectRow={{
            mode: "checkbox",
            clickToSelect: true,
            hideSelectAll: false,
            selectionHeaderRenderer: () => {
              return (
                <>
                  <input type="checkbox" style={{ display: "none" }} />
                  <label className="checkbox checkbox-single">
                    <input
                      type="checkbox"
                      onChange={() => {
                      }}
                    />
                    <span />
                  </label>
                </>
              );
            },
            selectionRenderer: ({ rowIndex }) => {
              return (
                <>
                  <input type="checkbox" style={{ display: "none" }} />
                  <label className="checkbox checkbox-single">
                    <input
                      type="checkbox"
                      onChange={() => {

                      }}
                    />
                    <span />
                  </label>
                </>
              );
            },
          }}
          noDataIndication={<Empty />}
          overlay={overlayFactory({
            spinner: false,
            text: <div className={Styles.table_loader} ><div className="loading"></div></div>,
            className: "overLay_table",
            styles: {
              overlay: (base) => ({
                ...base,
                justifyContent: "center",
                background: "transparent",
                cursor: "progress"
              }),
            },
          })}
          pagination={paginationFactory(paginationOptions)}
          onTableChange={onTableChange}
        ></BootstrapTable>
      </div>
    </Fragment>
  );
}

export default withTranslation()(CTable)