
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';

const UserTable = () => {

    const [dataUsers, setDataUser] = useState([]);
    useEffect(() => { loadUser() }, [])

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

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data)
    }


    return (
        <Table
            dataSource={dataUsers}
            columns={columns}
            rowKey={"_id"}
        />
    )

}

export default UserTable;