import React from "react";
import styles from "./MajorCreate.module.scss";
import Input from "../../components/input/Input";

const MajorCreate: React.FC = () => {
    const [name, setName] = React.useState("");
    const [code, setCode] = React.useState("");

    return (
        <div className={styles.teacherCreate}>
            <div className={styles.header}>
                <h1>Thêm mới</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.column}>
                    <Input title="name" label="Tên ngành" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.column}>
                    <Input title="code" label="Mã ngành" value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
            </div>
            <div className={styles.function}>
                <div className={styles.btn}>
                    <div className={styles.btn_submit}>
                        Lưu
                    </div>
                    <div className={styles.btn_cancel}>
                        Hủy
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MajorCreate;