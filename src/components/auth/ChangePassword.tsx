import { useState } from "react";
import "../../styles/login/ChangePassword.css";

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (newPassword !== confirmPassword) {
            setError("Mật khẩu mới và nhập lại mật khẩu không khớp!");
            return;
        }

        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            setError("Bạn chưa đăng nhập!");
            return;
        }

        const user = JSON.parse(storedUser);
        const email = user.email; // Lấy email trực tiếp từ localStorage

        try {
            const response = await fetch("http://localhost:4000/api/change-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-User-Email": email,
                },
                body: JSON.stringify({
                    email,
                    currentPassword,
                    newPassword,
                }),
            });

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.message);
            }

            setSuccess("Đổi mật khẩu thành công!");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <div className="change-password-container">
            <form onSubmit={handleChangePassword}>
                <h2 className="change-password-header">Đổi Mật Khẩu</h2>

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <div className="form-group">
                    <label>Mật khẩu hiện tại</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mật khẩu mới</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Nhập lại mật khẩu mới</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button className="btn btn-submit" type="submit">
                    Đổi mật khẩu
                </button>
                <button type="button" className="btn btn-cancel" onClick={() => setError("")}>
                    Hủy
                </button>
            </form>
        </div>
    );
}
