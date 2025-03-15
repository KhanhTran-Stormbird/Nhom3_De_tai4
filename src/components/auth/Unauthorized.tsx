export default function Unauthorized() {
    return (
        <div>
            <h2>Không có quyền truy cập!</h2>
            <p>Bạn không có quyền truy cập vào trang này.</p>
            <a href="/login">Quay lại đăng nhập</a>
        </div>
    );
}
