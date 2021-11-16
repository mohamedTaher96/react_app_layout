import { get, map, without } from 'lodash';
import React from 'react'

export const Columns = (schedule, filter) => {
    const columns = get(schedule, filter?.type)
    let res = map(columns, (column) => {
        if (!(column?.filtered==1)) {
            return {
                title: column?.value,
                dataIndex: column?.id,
                editable: true,
            }
        }

    })
    res = without(res, undefined)
    return [
        {
            title: '',
            dataIndex: 'item',
            width: '20%',
            fixed: true,
        },
        ...res
        // {
        //   title: 'operation',
        //   dataIndex: 'operation',
        //   render: (_, record) =>
        //     this.state.dataSource.length >= 1 ? (
        //       <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
        //         <a>Delete</a>
        //       </Popconfirm>
        //     ) : null,
        // },
    ];
}
