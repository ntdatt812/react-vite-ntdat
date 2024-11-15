import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        const res = await createUserAPI(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "CREATE USER",
                description: "Thêm mới user thành công!"
            })
        } else {
            notification.error({
                message: "ERROR",
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <div style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div >
                    <span>Full name</span>
                    <Input
                        placeholder="full name"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)} />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        placeholder="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        placeholder="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <span>Phone</span>
                    <Input
                        placeholder=" number phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleClick()
                            }
                        }}
                    />
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={() => handleClick()}
                    >Create user</Button>
                </div>
            </div>

        </div>
    )
}

export default UserForm;