import { get, map } from 'lodash';
import React from 'react'

export const Columns = (schedule, filter) => {
    const columns = get(schedule, filter?.type)
    const res = map(columns, (column) => {
        return {
            title: column?.value,
            dataIndex: column?.id,
            editable: true,
        }
    })
    return [
        {
            title: 'item',
            dataIndex: 'item',
            width:'20%',
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
