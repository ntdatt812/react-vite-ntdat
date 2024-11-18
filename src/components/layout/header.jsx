import { AliwangwangOutlined, BookOutlined, HomeOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Children, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
//import './header.css'

const Header = () => {
    const [current, setCurrent] = useState('');

    const { user } = useContext(AuthContext);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>User</Link>,
            key: 'app',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={"/books"}>Book</Link>,
            key: 'book',
            icon: <BookOutlined />,
        },

        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: `Đăng xuất`,
                    key: 'logout',
                    icon: <LogoutOutlined />,
                }
            ]
        }])

    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    );
}
export default Header;