import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table"
import { fetchAllUserAPI } from "../services/api.service";


const UserPage = () => {
    const [dataUsers, setDataUser] = useState([]);
    useEffect(() => { loadUser() }, [])

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data)
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                dataUsers={dataUsers}
                loadUser={loadUser}
            />
        </div>

    );
}

export default UserPage;