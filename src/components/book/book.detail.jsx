import { Drawer } from "antd";

const BookDetail = ({ dataBookDetail, isOpenBookDetail, setIsOpenBookDetail }) => {
    console.log(dataBookDetail)

    return (

        <Drawer
            title="Basic Drawer"
            onClose={() => setIsOpenBookDetail(false)}
            open={isOpenBookDetail}
            width={"40vw"}
        >
            {
                dataBookDetail ?
                    <>
                        <p> ID: {dataBookDetail.id}</p>
                        <br />
                        <p>Tiêu đề: {dataBookDetail.mainText}</p>
                        <br />
                        <p>Tác giả: {dataBookDetail.author}</p>
                        <br />
                        <p>Thể loại: { }</p>
                        <br />
                        <p>Giá tiền: {dataBookDetail.price}</p>
                        <br />
                        <p>Số lượng: {dataBookDetail.quantity}</p>
                        <br />
                        <p>Đã bán: { }</p>
                        <br />
                        <p>Thumbnail: </p>
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
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataBookDetail.thumbnail}`} />
                        </div>
                    </>
                    :
                    <></>
            }
        </Drawer >

    )
}

export default BookDetail;