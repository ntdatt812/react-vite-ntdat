
import React, { useState } from 'react';
import { message, notification, Popconfirm, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import DetailUser from './detail.user';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = ({ dataUsers, loadUser }) => {
    const [isModalUpdate, setIsModalUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        console.log(res)
        if (res?.data) {
            message.success("Xoá user thành công!")
            await loadUser()
        } else {
            notification.error({
                message: "ERROR",
                description: JSON.stringify(res.message)
            })
        }
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => (
                <a href='#' onClick={() => {
                    setDataDetail(record);
                    setIsDetailOpen(true);
                }
                }> {record._id}</a>
            ),
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
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModalUpdate(true);
                        }}
                        style={{
                            cursor: "pointer",
                            color: "orange"
                        }} />
                    <Popconfirm
                        title="DELETE USER"
                        placement="left"
                        description={`Bạn có chắc chắn muốn xoá ${record.fullName} không?`}
                        onConfirm={() => {
                            handleDeleteUser(record._id)
                        }}
                        okText="Có"
                        cancelText="Huỷ"
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <>
            <Table
                dataSource={dataUsers}
                columns={columns}
                rowKey={"_id"}
            />
            <UpdateUserModal
                isModalUpdate={isModalUpdate}
                setIsModalUpdate={setIsModalUpdate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <DetailUser
                isDetailOpen={isDetailOpen}
                dataDetail={dataDetail}
                setIsDetailOpen={setIsDetailOpen}
                setDataDetail={setDataDetail}
            />
        </>

    )

}

export default UserTable;