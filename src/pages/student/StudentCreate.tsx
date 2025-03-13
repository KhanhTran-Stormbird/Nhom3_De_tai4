import React from "react";
import styles from "./StudentCreate.module.scss";
import Input from "../../components/input/Input";

const StudentCreate: React.FC = () => {
    const [name, setName] = React.useState("");
    const [phone_number, setPhone_number] = React.useState("");
    const [className, setClassName] = React.useState("");
    const [code, setCode] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [dob, setDob] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [field, setField] = React.useState("");

    return (
        <div className={styles.teacherCreate}>
            <div className={styles.header}>
                <h1>Thêm mới</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.column}>
                    <Input title="name" label="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input title="phone_number" label="Số điện thoại" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
                    <Input title="class" label="Lớp" value={className} onChange={(e) => setClassName(e.target.value)} />
                    <Input title="code" label="Mã ngành" value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
                <div className={styles.column}>
                    <Input title="gender" label="Giới tính" value={gender} onChange={(e) => setGender(e.target.value)} />
                    <Input type="date" title="dob" label="Ngày sinh" value={dob} onChange={(e) => setDob(e.target.value)} />
                    <Input title="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input title="field" label="Chuyên ngành" value={field} onChange={(e) => setField(e.target.value)} />
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
export default StudentCreate;