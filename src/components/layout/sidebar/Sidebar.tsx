import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import {
  AppstoreAddOutlined,
  BookOutlined,
  HomeOutlined,
  InboxOutlined,
  InsertRowBelowOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const Sidebar: React.FC = () => {
  const rootItem = localStorage.getItem("persist:root");
  const user = rootItem ? JSON.parse(JSON.parse(rootItem).admin) : {};
  const userRole = user.isAdmin
    ? "admin"
    : user.isStaff
      ? "staff"
      : user.isCSR
        ? "csr"
        : "guest";

  const noDisablefor = (roles: string[]) => !roles.includes(userRole);
  const navigate = useNavigate();

  const [current, setCurrent] = useState('1');

  const items: MenuItem[] = [
    {
      key: 'home',
      label: 'Trang Chủ',
      icon: <HomeOutlined className={styles.icon_antd} />,
      onClick: () => navigate('/'),
    },
    {
      key: 'teacher',
      label: 'Giảng viên',
      icon: <BookOutlined className={styles.icon_antd} />,
      onClick: () => navigate('/teacher'),
      // disabled: noDisablefor(['admin', 'staff']),
    },
    {
      key: 'student',
      label: 'Sinh viên',
      icon: <InboxOutlined className={styles.icon_antd} />,
      onClick: () => navigate('/student'),
      // disabled: noDisablefor(['admin', 'staff']),
    },
    {
      key: 'major',
      label: 'Ngành học',
      icon: <UserOutlined className={styles.icon_antd} />,
      onClick: () => navigate('/major'),
    },
    {
      key: 'time_register',
      label: 'Đợt đăng ký',
      icon: <AppstoreAddOutlined className={styles.icon_antd} />,
      // disabled: noDisablefor(['admin', 'staff']),
    },
    {
      key: 'project',
      label: 'Đồ án',
      icon: <InsertRowBelowOutlined className={styles.icon_antd} />,
      // disabled: noDisablefor(['admin', 'staff']),
    },
    {
      key: 'internship',
      label: 'Thực tập',
      icon: <InsertRowBelowOutlined className={styles.icon_antd} />,
      // disabled: noDisablefor(['admin', 'staff']),
    },
    {
      key: 'companies',
      label: 'Danh sách công ty',
      icon: <InsertRowBelowOutlined className={styles.icon_antd} />,
      // disabled: noDisablefor(['admin', 'staff']),
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
  };

  return (
    <>
      {/* <style>
        {`
                        .ant-menu {
                            background-color: unset !important;
                        }

                    `}
      </style> */}

      <div className={styles.container}>
        <div className={styles.category_list}>
          <Menu
            theme="dark"
            onClick={onClick}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
            className={styles.menu}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
