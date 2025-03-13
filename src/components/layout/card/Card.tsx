import React from "react";
import styles from "./Card.module.scss";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";

interface CardProps {
    title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <AppstoreOutlined className={styles.icon} />
            </div>
            <div className={styles.card_body}>
                <p>{title}</p>
            </div>
        </div>
    );
}
export default Card;