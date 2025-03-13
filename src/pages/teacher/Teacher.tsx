import React from "react";
import styles from "./Teacher.module.scss";
import { Table } from "antd";
import { DeleteFilled, EditOutlined, UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Teacher: React.FC = () => {
    const dataSource = [
        {
            key: '1',
            index: '1',
            fullname: 'Nguyễn Văn Đ',
            date_of_birth: '25/08/1998',
            gender: 'Nam',
            phone_number: '0946325456',
            title: 'Thạc sĩ',
            field: 'Trí tuệ nhân tạo',
            email: 'abc123@gmail.com',
        },
        {
            key: '2',
            index: '2',
            fullname: 'Nguyễn Thị B',
            date_of_birth: '21/05/1996',
            gender: 'Nữ',
            phone_number: '0925456625',
            title: 'Thạc sĩ',
            field: 'An ninh mạng',
            email: 'abc123@gmail.com',
        },
        {
            key: '3',
            index: '3',
            fullname: 'Nguyễn Văn C',
            date_of_birth: '03/04/1989',
            gender: 'Nam',
            phone_number: '0925456625',
            title: 'Tiến sĩ',
            field: 'Trí tuệ nhân tạo',
            email: 'abc123@gmail.com',
        },
        {
            key: '4',
            index: '4',
            fullname: 'Nguyễn Thị Đ',
            date_of_birth: '07/09/1985',
            gender: 'Nữ',
            phone_number: '0925456625',
            title: 'Tiến sĩ',
            field: 'An ninh mạng',
            email: 'abc123@gmail.com',
        },
        {
            key: '5',
            index: '5',
            fullname: 'Nguyễn Văn E',
            date_of_birth: '09/01/1990',
            gender: 'Nam',
            phone_number: '0925456625',
            title: 'Thạc sĩ',
            field: 'Trí tuệ nhân tạo',
            email: 'abc123@gmail.com',
        },
    ];

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullname',
            key: 'fullname',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'date_of_birth',
            key: 'date_of_birth',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Chức danh',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Lĩnh vực',
            dataIndex: 'field',
            key: 'field',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.header}>
                <h1>DANH SÁCH GIẢNG VIÊN</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.function}>
                    <button onClick={() => { navigate('/teacher/create') }}><UserAddOutlined /> Thêm</button>
                    <button onClick={() => { navigate('/teacher/edit') }}><EditOutlined /> Sửa</button>
                    <button><DeleteFilled /> Xóa</button>
                </div>
                <div className={styles.table}>
                    <Table dataSource={dataSource} columns={columns} />;
                </div>
            </div>
        </div>
    );
}
export default Teacher;