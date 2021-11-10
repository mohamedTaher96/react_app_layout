import { get, map } from 'lodash'
import React from 'react'

export const DataSource = (schedule, filter, items, data) => {
    const columns = get(schedule, filter?.type)

    const res = map(data, (row) => {
        let columnsData = {}
        map(columns, column => {
            columnsData = {
                ...columnsData,
                [column?.id]: <span row_id={row?.item} column_id={column?.id}>`{get(items, row?.item)?.name} && {column?.value}`</span>
            }
        })
        if (!row?.deleted_at) {
            return {
                item: <div row_id={row?.item}>{get(items, row?.item)?.name}</div>,
                ...columnsData
            }
        }
    })
    return [
        ...res
    ]
}
