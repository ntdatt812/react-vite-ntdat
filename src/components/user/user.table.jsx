
import React from 'react';
import { Table } from 'antd';

const UserTable = ({ dataUsers }) => {

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
        },
    ];

    return (
        <Table
            dataSource={dataUsers}
            columns={columns}
            rowKey={"_id"}
        />
    )

}

export default UserTable;