import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";


const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext);

    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    return (
        <Result
            status="403"
            title="403"
            subTitle="Xin lỗi, bạn cần đăng nhập để truy cập tài nguyên này."
            extra={<Button type="primary"><Link to={"/login"}>Đăng nhập</Link></Button>}
        />
    )
}

export default PrivateRoute;
