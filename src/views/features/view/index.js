import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditableTable from '../../../components/table'
import Request from '../../../requests/Request';
import { Columns } from './helpers/columns';
import { DataSource } from './helpers/dataSource'
import serializer from "../../../requests/serializer";
import ItemsBar from './components/items';
import { get, map, set } from 'lodash';
import Spinner from "../../../components/Loader/Spinenr";
import swal from 'sweetalert';
import Filter from './components/filter';
import Modal from "../../../components/Modal/main";
import NickName from './components/nickname';

class CompanyView extends Component {
    state = {
        filter: {
            type: "year"
        },
        settings_schedule: {},
        settings__items: {},
        settings__item_category: {},
        product__company_items: {},
        product__company_item_values: {},
        product__company_item_check: {},
        modal: {
            show: false,
            type: "",
            item: "",
            companyItem: ""
        },
        loading: true
    }
    componentDidMount() {
        let data = {
            settings__items: {},
            settings__item_category: {},
            product__company_items: {
                filter: {
                    company: this.props.match?.params?.company
                }
            },
            product__company_item_values: {
                filter: {
                    company: this.props.match?.params?.company
                }
            },
            product__company_item_check: {
                filter: {
                    company: this.props.match?.params?.company
                }
            }
        }
        Request.sendRequest("multi_query/", data)
            .then(res => {
                res.data.settings_schedule = {
                    ...this.props.schedule
                }
                const result = serializer(res.data, [
                    { key: "settings__items", index: "id" },
                    { key: "settings__item_category", index: "id" },
                    { key: "product__company_items", index: "item" },
                    { key: "product__company_item_values", index: "id" },
                    { key: "product__company_item_check", index: "schedule" }
                ])
                this.setState({
                    ...this.state,
                    ...result,
                    loading: false
                })
            })
    }
    handelFilterChange = (type, item_id) => {
        const status = get(this.state.settings_schedule, `${type}.${item_id}`)?.filtered
        const value = set(this.state.settings_schedule, `${type}.${item_id}.filtered`, status == 1 ? 0 : 1)
        this.setState({
            ...this.state,
            settings_schedule: value,
            loading: false
        })
    }
    handelSaveFilter = (type) => {
        this.setState({
            loading: true,
            filter: {
                type: type
            }
        }, () => {
            setTimeout(() => {
                this.setState({
                    loading: false
                })
            }, 500)
        })
    }


    render() {
        const { loading, filter, settings_schedule, settings__items, settings__item_category, product__company_items, product__company_item_values, product__company_item_check, modal } = this.state
        const data = DataSource(settings_schedule, filter, settings__items, product__company_items, product__company_item_values, product__company_item_check, this);
        const columns = Columns(settings_schedule, filter);
        return (
            <div>
                {loading ?
                    <Spinner />
                    : <div>
                        <div className="d-flex justify-content-end w-100">
                            <Filter
                                type={filter?.type}
                                schedule={settings_schedule}
                                handelChangeInput={this.handelFilterChange}
                                handleSubmit={this.handelSaveFilter}
                            />
                        </div>
                        <EditableTable
                            dataSource={data}
                            columns={columns}
                            HandleEdit={(item, value) => { this.HandleEdit(item, value) }}
                        />
                        <Modal show={modal?.show} handleClose={() => { this.setState({ ...this.state, modal: { show: false } }) }}
                            title={`${modal?.item?.name} ${modal?.type}`}
                        >
                            {modal?.type === "nickname" &&
                                <NickName
                                    companyItems={modal?.companyItem}
                                    item={modal?.item}
                                    handelClose={() => { this.setState({ ...this.state, modal: { show: false } }) }}
                                    handelSubmit={(item) => { this.handelSubmitItem(item) }}
                                />
                            }
                        </Modal>
                    </div>}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        schedule: state?.user?.schedule
    }
}
export default connect(mapStateToProps, null)(withRouter(CompanyView))