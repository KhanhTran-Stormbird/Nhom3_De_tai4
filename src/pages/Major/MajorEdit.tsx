import React from "react";
import styles from "./MajorEdit.module.scss";
import Input from "../../components/input/Input";

const MajorEdit: React.FC = () => {
    const [name, setName] = React.useState("");
    const [code, setCode] = React.useState("");

    return (
        <div className={styles.teacherCreate}>
            <div className={styles.header}>
                <h1>Cập nhật</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.column}>
                    <Input title="name" label="Tên ngành" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.column}>
                    <Input title="code" label="Mã ngành" value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
            </div>
            <div className={styles.btn}>
                <div className={styles.btn_submit}>
                    Cập nhật
                </div>
            </div>
        </div>
    );
}
export default MajorEdit;