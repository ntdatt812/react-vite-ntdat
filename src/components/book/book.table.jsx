import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, Table } from "antd";


const BookTable = ({ dataBook, current, pageSize, total, setCurrent, setPageSize }) => {




    const onChange = (pagination, filters, sorter, extra) => {
        //meu thay doi trang
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(pagination.current);
            }
        }
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize);
            }
        }
    };

    const columns = [
        {
            title: 'STT',
            render: (_, record, index) => {
                return (<>{index + 1 + (current - 1) * pageSize}</>)
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => (
                <a href='#' onClick={() => {
                    // setDataDetail(record);
                    // setIsDetailOpen(true);
                }
                }> {record._id}</a>
            ),
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'mainText',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            render: (text, record, index, action) => {
                if (text) { return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(text) }
            }

        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',

        },
        {
            title: 'Tác giả',
            dataIndex: 'author',

        },
        {
            title: 'Action',
            key: "action",
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            // setDataUpdate(record)
                            // setIsModalUpdate(true);
                        }}
                        style={{
                            cursor: "pointer",
                            color: "orange"
                        }} />
                    <Popconfirm
                        title="DELETE BOOK"
                        placement="left"
                        description={`Bạn có chắc chắn muốn xoá ${record.mainText} không?`}
                        onConfirm={() => {
                            // handleDeleteUser(record._id)
                        }}
                        okText="Có"
                        cancelText="Huỷ"
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </div>
            )
        }
    ];


    return (
        <Table
            dataSource={dataBook}
            columns={columns}
            rowKey={"_id"}
            pagination={
                {
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                }
            }
            onChange={onChange}
        />
    )
}

export default BookTable;