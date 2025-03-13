import React from "react";
import styles from "./TeacherEdit.module.scss";
import Input from "../../components/input/Input";

const TeacherEdit: React.FC = () => {
    const [name, setName] = React.useState("CSE123");
    const [teacher_code] = React.useState("216488");
    const [phone_number, setPhone_number] = React.useState("0946325456");
    const [title, setTitle] = React.useState("Thạc sĩ");
    const [code, setCode] = React.useState("CSE123");
    const [gender, setGender] = React.useState("Nam");
    const [dob, setDob] = React.useState("25/08/1998");
    const [email, setEmail] = React.useState("abc123@gmail.com");
    const [field, setField] = React.useState("Trí tuệ nhân tạo");

    return (
        <div>
            <div className={styles.header}>
                <h1>Thông tin cá nhân</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.avatar}>
                        <img src="/src/assets/logo-small.png" alt="avatar" />
                        <input type="file" id="file" />

                    </div>
                    <h2>Nguyễn Văn A</h2>
                    <div className={styles.btn_submit}>
                        Cập nhật
                    </div>
                    <div className={styles.code}>
                        <Input title="code" label="Mã ngành" value={code} onChange={(e) => setCode(e.target.value)} />
                    </div>
                </div>
                <div className={styles.column} style={{ marginTop: "50px" }}>
                    <Input title="teacher_code" label="Mã Giảng Viên" value={teacher_code} onChange={() => { }} />
                    <Input title="dob" label="Ngày sinh" value={dob} onChange={(e) => setDob(e.target.value)} />
                    <Input title="phone_number" label="Số điện thoại" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
                    <Input title="title" label="Chức danh" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles.column} style={{ marginTop: "50px" }}>
                    <Input title="name" label="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input title="gender" label="Giới tính" value={gender} onChange={(e) => setGender(e.target.value)} />
                    <Input title="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input title="field" label="Lĩnh vực" value={field} onChange={(e) => setField(e.target.value)} />
                </div>
            </div>
        </div>
    );
}
export default TeacherEdit;