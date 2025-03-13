import React from "react";
import styles from "./Header.module.scss";
import { Dropdown } from "antd";
import { BarsOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";

const items = [
    {
        key: '1',
        label: (
            <p>
                Thông tin cá nhân
            </p>
        ),
        onClick: () => { console.log('Item 1 clicked') }
    },
    {
        key: '2',
        label: (
            <p>
                Đổi mật khẩu
            </p>
        ),
        onClick: () => { console.log('Item 2 clicked') }
    },
    {
        key: '3',
        label: (
            <p>
                Đăng xuất
            </p>
        ),
        onClick: () => { console.log('Item 3 clicked') }
    }
]

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.sidebar_header}>
                <img src="src/assets/logo-small.png" alt="logo" className={styles.logo} />
                <BarsOutlined className={styles.barOutline} />
            </div>
            <Dropdown menu={{ items }} trigger={['click']} className={styles.dropdown}>
                <a onClick={(e) => e.preventDefault()}>
                    <UserOutlined />
                    Nguyen Van A
                    <DownOutlined />
                </a>
            </Dropdown>
        </div>
    );
}
export default Header;