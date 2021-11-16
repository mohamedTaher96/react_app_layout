import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditableTable from '../../../components/table'
import Request from '../../../requests/Request';
import { Columns } from './helpers/columns';
import { DataSource } from './helpers/dataSource'
import serializer from "../../../requests/serializer";
import ItemsBar from './components/items';
import { get, set } from 'lodash';
import Spinner from "../../../components/Loader/Spinenr";
import swal from 'sweetalert';
import Filter from './components/filter';

class CompanyInput extends Component {
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
    handelToggleItem = (item) => {
        this.setState({ ...this.state, loading: true })
        const data = {
            data: {
                product__company_items: [
                    {
                        company: this.props.match?.params?.company,
                        item: item?.id,
                        order: item?.order,
                        deleted: get(this.state?.product__company_items, item?.id) ? true : false
                    }
                ]
            }
        }
        Request.sendRequest("update_models/", data)
            .then(res => {
                const item = res?.data?.product__company_items[0]
                swal("Add Item!", "Successfully add item to company", "success")
                this.setState({
                    ...this.state,
                    product__company_items: {
                        ...this.state.product__company_items,
                        [item?.item]: item
                    },
                    loading: false
                })
            })
    }
    HandleEdit = (item, value) => {
        if (value) {
            this.setState({ ...this.state, loading: true })
            const data = {
                data: {
                    product__company_item_values: [
                        {
                            id: item?._id,
                            company: this.props.match?.params?.company,
                            item: item?.row_id,
                            schedule: item?.column_id,
                            value: value
                        }
                    ]
                }
            }
            Request.sendRequest("update_models/", data)
                .then(res => {
                    const item = res?.data?.product__company_item_values[0]
                    this.setState({
                        ...this.state,
                        product__company_item_values: {
                            ...this.state.product__company_item_values,
                            [item?.id]: item
                        },
                        loading: false
                    })
                })
        }
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
    handelCheck = (id) => {
        swal({
            title: "Check Values!",
            text: "are you sure you want to cofirm check values",
            icon: "warning",
            buttons: ["cancel", "check"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.setState({ ...this.state, loading: true })
                    const data = {
                        data: {
                            product__company_item_check: [
                                {
                                    company: this.props.match?.params?.company,
                                    schedule: id
                                }
                            ]
                        }
                    }
                    Request.sendRequest("update_models/", data)
                        .then(res => {
                            const item = res?.data?.product__company_item_check[0]
                            this.setState({
                                ...this.state,
                                product__company_item_check: {
                                    ...this.state.product__company_item_check,
                                    [item?.schedule]: item
                                },
                                loading: false
                            })
                        })
                }
            })
    }

    render() {
        const { loading, filter, settings_schedule, settings__items, settings__item_category, product__company_items, product__company_item_values, product__company_item_check } = this.state
        const data = DataSource(settings_schedule, filter, settings__items, product__company_items, product__company_item_values, product__company_item_check, this);
        const columns = Columns(settings_schedule, filter);
        console.log(columns, "settings_schedule")
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
                            <ItemsBar
                                companyItems={product__company_items}
                                items={settings__items}
                                categories={settings__item_category}
                                handelToggleItem={this.handelToggleItem}
                            />
                        </div>
                        <EditableTable
                            dataSource={data}
                            columns={columns}
                            HandleEdit={(item, value) => { this.HandleEdit(item, value) }}
                        />
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
export default connect(mapStateToProps, null)(withRouter(CompanyInput))