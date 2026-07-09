import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#17181d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        direction: "rtl",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          background: "rgba(30, 37, 57, 0.65)",
          border: "1px solid rgba(76, 121, 255, 0.2)",
          borderRadius: "28px",
          padding: "50px 30px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 15px 40px rgba(0,0,0,.35)",
        }}
      >
        <div
          style={{
            fontSize: "72px",
            color: "#5b8cff",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          404
        </div>

        <h2
          style={{
            color: "#fff",
            marginBottom: "12px",
            fontSize: "2rem",
          }}
        >
          الصفحة غير موجودة
        </h2>

        <p
          style={{
            color: "#b8b8c5",
            lineHeight: 1.8,
            marginBottom: "35px",
          }}
        >
          يبدو أن الرابط الذي أدخلته غير موجود أو تم نقله.
        </p>

        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "18px",
              border: "1px solid rgba(91,140,255,.35)",
              background: "transparent",
              color: "#5b8cff",
              fontSize: "1.15rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: ".25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#5b8cff";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#5b8cff";
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
