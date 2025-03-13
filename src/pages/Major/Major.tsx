import React from "react";
import styles from "./Major.module.scss";
import { Table } from "antd";
import { DeleteFilled, EditOutlined, UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Major: React.FC = () => {
    const dataSource = [
        {
            key: '1',
            index: '1',
            name: 'An ninh mạng',
            code: 'CSE123'
        },
        {
            key: '2',
            index: '2',
            name: 'Công nghệ thông tin',
            code: 'CSE345'
        },
        {
            key: '3',
            index: '3',
            name: 'Trí tuệ nhân tạo',
            code: 'CSE678'
        },
        {
            key: '4',
            index: '4',
            name: 'Kỹ thuật phần mềm',
            code: 'CSE789'
        },
    ];

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Tên ngành',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Mã ngành',
            dataIndex: 'code',
            key: 'code',
        },
    ];

    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.header}>
                <h1>NGÀNH HỌC</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.function}>
                    <button onClick={() => { navigate('/major/create') }}><UserAddOutlined /> Thêm</button>
                    <button onClick={() => { navigate('/major/edit') }}><EditOutlined /> Sửa</button>
                    <button><DeleteFilled /> Xóa</button>
                </div>
                <div className={styles.table}>
                    <Table dataSource={dataSource} columns={columns} />;
                </div>
            </div>
        </div>
    );
}
export default Major;