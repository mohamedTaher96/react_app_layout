import { get, map } from 'lodash';
import React, { useState } from 'react'
import Modal from "../../../../../components/Modal/main";
import Styles from "./style.module.css";

export default function Filter({type, schedule, handelChangeInput, handleSubmit }) {
    const [state, setState] = useState({
        show: false,
        type: type,
        selected: "year"
    })
    const filterSchedule = get(schedule, state?.type)
    return (
        <div>
            <button className="btn btn-success m-1"
                onClick={() => { setState({ ...state, show: true }) }}
            >Filter By</button>
            <Modal show={state?.show} handleClose={() => { setState({ ...state, show: false }) }}
                title="Filter" save="filter" closeBtn="close"
                handleSubmit={() => { handleSubmit(state?.type) }}

            >
                <div className="d-flex align-items-center">
                    <label className="w-25 fw-bolder">Type : </label>
                    <select className="form-control w-75"
                        value={state?.type}
                        onChange={(e) => { setState({ ...state, type: e.target.value }) }}
                    >
                        <option value="year">Year</option>
                        <option value="head">Head</option>
                        <option value="quarter">Quarter</option>
                        <option value="month">Month</option>
                    </select>
                </div>
                {/* <div className="d-flex align-items-center ">
                    <div className={`${Styles.tab} ${state?.selected === "year" && Styles.active}`}
                        onClick={() => { setState({ ...state, selected: "year" }) }}
                    >Year</div>
                    {state?.type === "head" && <div className={`${Styles.tab} ${state?.selected === "head" && Styles.active}`}
                        onClick={() => { setState({ ...state, selected: "head" }) }}
                    >Head</div>}
                    {state?.type === "quarter" && <div className={`${Styles.tab} ${state?.selected === "quarter" && Styles.active}`}
                        onClick={() => { setState({ ...state, selected: "quarter" }) }}
                    >Quarter</div>}
                    {state?.type === "month" && <div className={`${Styles.tab} ${state?.selected === "month" && Styles.active}`}
                        onClick={() => { setState({ ...state, selected: "month" }) }}
                    >Month</div>}
                </div> */}
                <div>
                    <div className="row">
                        {map(filterSchedule, (item, key) => {
                            return <div className="col-lg-3 p-3 fw-bolder col-sm-6" key={key}>
                                <input type="checkbox" className=""
                                    checked={item?.filtered == 1 ? 0 : 1}
                                    onClick={() => { handelChangeInput(state?.type, item?.id) }}
                                /> {item?.value}
                            </div>
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    )
}
