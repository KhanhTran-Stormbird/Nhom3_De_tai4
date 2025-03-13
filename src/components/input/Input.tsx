import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    type?: string;
    title: string;
    label: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, title, label, value, onChange }) => {
    return (
        <div className={styles.input}>
            <label htmlFor={title}>{label}</label>
            <input type={type ? type : "text"} id={title} className={title} value={value} onChange={onChange} />
        </div>
    );
}
export default Input;