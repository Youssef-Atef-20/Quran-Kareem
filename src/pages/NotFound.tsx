import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1>404</h1>
        <h2>الصفحة غير موجودة</h2>
        <p>الرابط الذي أدخلته غير صحيح أو أن الصفحة غير موجودة.</p>

        <Link to="/">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            العودة إلى الصفحة الرئيسية
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
