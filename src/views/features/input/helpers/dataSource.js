import { get, map } from 'lodash'
import React from 'react'
import serializer from '../../../../requests/serializer'
import Styles from "../style.module.css";
import { Menu, Dropdown, Button } from 'antd';

export const DataSource = (schedule, filter, items, data, values, cehck, _this) => {

    values = serializer({ product__company_item_values: values }, [
        { key: "product__company_item_values", index: ['item', 'schedule'], type: 'groupBy' }
    ])?.product__company_item_values
    const columns = get(schedule, filter?.type)
    let cellValue = null;
    const res = map(data, (row) => {
        let rowName = get(items, row?.item)?.name
        if (rowName && !row?.deleted_at) {
            let columnsData = {}
            map(columns, column => {
                cellValue = get(get(values, row?.item), column?.id)
                if (cellValue) {
                    cellValue = cellValue[0]
                }
                columnsData = {
                    ...columnsData,
                    [column?.id]: <span _id={cellValue?.id} row_id={row?.item} column_id={column?.id} edit={true}>{cellValue?.value}</span>
                }
            })
            const menu = (
                <Menu>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            info
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            add nickname
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                            remove item
                        </a>
                    </Menu.Item>
                </Menu>
            );
            return {
                item: <div row_id={row?.item} className="d-flex align-items-center">
                    <Dropdown overlay={menu} placement="bottomLeft" arrow className="m-2">
                        <Button><span> <i class="fas fa-cog"></i> </span></Button>
                    </Dropdown>
                    {rowName}</div>,
                ...columnsData
            }
        }
    })
    let checkData = {}
    map(columns, column => {
        // if (!(column?.filtered==1)) {
        checkData = {
            ...checkData,
            [column?.id]: <div column_id={column?.id} edit={"check"} className={Styles.checkContainer}>
                {get(cehck, column?.id) ?
                    <div className={Styles?.checkActive}></div>
                    : <div className={Styles?.checkUnActive}
                        onClick={() => { _this.handelCheck(column?.id) }}
                    ></div>
                }
            </div>
        }
        // }
    })
    return [
        ...res,
        {
            item: <div ><h5 className="fw-bolder">check</h5><span>(check values you are set)</span></div>,
            ...checkData
        }
    ]
}
