import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName,
            email,
            password,
            phone
        }
        axios.post(URL_BACKEND, data);
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