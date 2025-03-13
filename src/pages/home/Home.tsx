import React from "react";
import styles from "./Home.module.scss";
import Card from "../../components/layout/card/Card";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.card_item} onClick={() => navigate("/teacher")}>
                <Card title="Giảng viên" />
            </div>
            <div className={styles.card_item} onClick={() => navigate("/student")}>
                <Card title="Sinh viên" />
            </div>
            <div className={styles.card_item} onClick={() => navigate("/major")}>
                <Card title="Ngành học" />
            </div>
            <div className={styles.card_item}>
                <Card title="Đợt đăng ký" />
            </div>
            <div className={styles.card_item}>
                <Card title="Đồ án" />
            </div>
            <div className={styles.card_item}>
                <Card title="Thực tập" />
            </div>
            <div className={styles.card_item}>
                <Card title="Danh sách công ty" />
            </div>
        </div>
    );
}
export default Home;