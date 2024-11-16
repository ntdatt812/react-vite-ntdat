import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
//import './header.css'

const Header = () => {
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: <Link to={"/users"}>User</Link>,
            key: 'app',
            icon: <AppstoreOutlined />,
        },
        {
            label: <Link to={"/books"}>Book</Link>,
            key: 'book',
            icon: <SettingOutlined />,
        }
    ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    );
}
export default Header;