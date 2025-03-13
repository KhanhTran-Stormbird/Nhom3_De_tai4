import React from "react";
import styles from "./Student.module.scss";
import { Table } from "antd";
import { DeleteFilled, EditOutlined, UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Student: React.FC = () => {
    const dataSource = [
        {
            key: '1',
            index: '1',
            fullname: 'Nguyễn Văn Đ',
            date_of_birth: '25/08/2001',
            gender: 'Nam',
            phone_number: '0946325456',
            class: '61TH',
            field: 'An ninh mạng',
            email: 'abc123@gmail.com',
        },
        {
            key: '2',
            index: '2',
            fullname: 'Nguyễn Thị B',
            date_of_birth: '21/05/2002',
            gender: 'Nữ',
            phone_number: '0925456625',
            class: '62HT',
            field: 'công nghệ thông tin',
            email: 'abc123@gmail.com',
        },
        {
            key: '3',
            index: '3',
            fullname: 'Nguyễn Văn C',
            date_of_birth: '03/04/2001',
            gender: 'Nam',
            phone_number: '0925456625',
            class: '61PM',
            field: 'Trí tuệ nhân tạo',
            email: 'abc123@gmail.com',
        },
        {
            key: '4',
            index: '4',
            fullname: 'Nguyễn Thị Đ',
            date_of_birth: '07/09/2003',
            gender: 'Nữ',
            phone_number: '0925456625',
            class: '63PM',
            field: 'Công nghệ thông tin',
            email: 'abc123@gmail.com',
        },
        {
            key: '5',
            index: '5',
            fullname: 'Nguyễn Văn E',
            date_of_birth: '09/01/2004',
            gender: 'Nam',
            phone_number: '0925456625',
            class: '64TH',
            field: 'Hệ thống thông tin',
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
            title: 'Lớp',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: 'Chuyên ngành',
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
                <h1>DANH SÁCH SINH VIÊN</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.function}>
                    <button onClick={() => { navigate('/student/create') }}><UserAddOutlined /> Thêm</button>
                    <button onClick={() => { navigate('/student/edit') }}><EditOutlined /> Sửa</button>
                    <button><DeleteFilled /> Xóa</button>
                </div>
                <div className={styles.table}>
                    <Table dataSource={dataSource} columns={columns} />;
                </div>
            </div>
        </div>
    );
}
export default Student;