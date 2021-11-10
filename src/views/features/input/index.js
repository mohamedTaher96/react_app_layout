import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditableTable from '../../../components/table'
import Request from '../../../requests/Request';
import { Columns } from './helpers/columns';
import { DataSource } from './helpers/dataSource'
import serializer from "../../../requests/serializer";
import ItemsBar from './components/items';
import { get, size } from 'lodash';
import Spinner from "../../../components/Loader/Spinenr"
class CompanyInput extends Component {
    state = {
        filter: {
            type: "month"
        },
        settings__items: {},
        settings__item_category: {},
        product__company_items: {},
        Company_Item_Values: {},
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
            Company_Item_Values: {
                filter: {
                    company: this.props.match?.params?.company
                }
            }
        }
        Request.sendRequest("multi_query/", data)
            .then(res => {
                const result = serializer(res.data, [
                    { key: "settings__items", index: "id" },
                    { key: "settings__item_category", index: "id" },
                    { key: "product__company_items", index: "item" },
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
    render() {
        const { loading, filter, settings__items, settings__item_category, product__company_items } = this.state
        const { schedule } = this.props
        const data = DataSource(schedule, filter,settings__items, product__company_items);
        const columns = Columns(schedule, filter);
        return (
            <div>
                {loading ?
                    <Spinner />
                    : <div>
                        <div className="d-flex justify-content-end w-100">
                            <button className="btn btn-success m-1">Compare</button>
                            <button className="btn btn-success m-1">View By</button>
                            <ItemsBar
                                itemsSize={size(product__company_items)}
                                items={settings__items}
                                categories={settings__item_category}
                                handelToggleItem={this.handelToggleItem}
                            />
                        </div>
                        <EditableTable
                            dataSource={data}
                            columns={columns}
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