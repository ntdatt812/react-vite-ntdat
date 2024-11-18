import { Button, Form, Input, InputNumber, Modal, Select } from "antd"
import FormItem from "antd/es/form/FormItem"
import { useState } from "react"

const BookCreateUnControl = ({ loadTableBook, setIsModalCreateBook, isModalCreateBook }) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleOnChangeFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }
    const onFinish = (values) => {
        console.log(">check value: ", values)
    }

    return (
        <div style={{ margin: "20px 0" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <h3>Table books</h3>
                <Button
                    type="primary"
                    onClick={() => {
                        setIsModalCreateBook(true)
                    }}
                >Create book</Button>
                <Modal
                    title="Create a book"
                    open={isModalCreateBook}
                    onCancel={() => setIsModalCreateBook(false)}
                >
                    <Form
                        layout="vertical"
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Tiêu đề"
                            name="mainText"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bạn không được để trống tiêu đề!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Tác giả"
                            name="author"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bạn không được để trống tác giả!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Giá tiền"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bạn không được để trống giá tiền!',
                                },
                            ]}
                        >
                            <InputNumber addonAfter="₫" />
                        </Form.Item>

                        <Form.Item
                            label="Số lượng"
                            name="quantity"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bạn không được để trống số lượng!',
                                },
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item
                            label="Thể loại"
                            name="category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bạn không được để trống thể loại!',
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Chọn thể loại"
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    { value: 'Arts', label: 'Arts' },
                                    { value: 'Business', label: 'Business' },
                                    { value: 'Comics', label: 'Comics' },

                                    { value: 'Cooking', label: 'Cooking' },
                                    { value: 'Entertainment', label: 'Entertainment' },
                                    { value: 'History', label: 'History' },

                                    { value: 'Music', label: 'Music' },
                                    { value: 'Sports', label: 'Sports' },
                                    { value: 'Teen', label: 'Teen' },
                                    { value: 'Travel', label: 'Travel' },

                                ]} />
                        </Form.Item>
                        <Form.Item
                            label="Ảnh thumbnail"
                        >

                            <div  >
                                <label
                                    htmlFor="btnUpload"
                                    style={{
                                        borderRadius: "5px",
                                        display: "block",
                                        width: "fit-content",
                                        marginTop: "15px",
                                        padding: "5px 10px",
                                        background: "orange",
                                        cursor: "pointer"
                                    }}
                                >Upload</label>
                                <input
                                    type="file"
                                    hidden id="btnUpload"
                                    onChange={(event) => { handleOnChangeFile(event) }}
                                    onClick={(event) => {
                                        event.target.value = null
                                    }}
                                    style={{ display: "none" }}
                                />
                            </div>
                            {preview ?
                                <div style={{
                                    marginTop: "10px",
                                    height: "150px",
                                    width: "150px",
                                    border: "1px solid #ccc"
                                }}>
                                    <img
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            objectFit: "contain"
                                        }}
                                        src={preview}
                                    />
                                </div>
                                : <></>
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    )
}

export default BookCreateUnControl