import { get, groupBy, map } from 'lodash';
import React, { useState } from 'react'
import Styles from "../../style.module.css";

export default function ItemsBar({ itemsSize, items, categories, handelToggleItem }) {
    const [show, setShow] = useState(itemsSize > 0 ? false : true)
    const categoryGroup = groupBy(items, function (b) { return b?.category?.$id })
    return (
        <div>
            <button className="btn btn-success m-1"
                onClick={() => { setShow(true) }}
            >Add Items</button>
            <div className={`${Styles.itemsBar} ${show && Styles.showBar}`}>
                <div className="d-flex justify-content-start btn btn-danger font-weight-bolder " style={{ width: '40px' }}
                    onClick={() => { setShow(false) }}
                >x</div>
                <div>
                    <h3>Choose Items</h3>
                    <span>lorem item lorem item lorem item lorem item lorem item lorem item lorem item</span>
                </div>
                <div className="mt-3 ml-1 mr-1">
                    {map(categoryGroup, (groupItem, key) => {
                        return <div>
                            <div className={Styles.groupItems}>{get(categories, key)?.name}</div>
                            <div className="d-flex align-items-center justify-content-center flex-wrap ">
                                {map(groupItem, (item, key) => {
                                    if (!item?.calculated) {
                                        return <div key={key} className={Styles.barItem}
                                            onClick={() => { handelToggleItem(item) }}
                                        >{item?.name}</div>
                                    }
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
