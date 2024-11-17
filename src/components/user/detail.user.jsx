import { Button, Drawer } from "antd";

const DetailUser = ({ isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail }) => {
    console.log(dataDetail)
    return (
        <Drawer
            width={"40vw"}
            title="Chi tiết thông tin user"
            onClose={() => {
                setDataDetail(null)
                setIsDetailOpen(false)
            }}
            open={isDetailOpen}
        >
            {dataDetail ?
                <div style={{}}>
                    <p>Id: {dataDetail._id}</p>
                    <br />
                    <p>Full name: {dataDetail.fullName}</p>
                    <br />
                    <p>Email: {dataDetail.email}</p>
                    <br />
                    <p>Phone number: {dataDetail.phone}</p>
                    <br />
                    <p>Avatar: </p>
                    <div>
                        <img
                            height={"150px"} width={"150px"}
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                    </div>
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
                        >Upload avatar</label>
                        <input type="file" hidden id="btnUpload" />
                    </div>

                </div>
                :
                <>Không có dữ liệu</>
            }
        </Drawer>
    )
}
export default DetailUser;