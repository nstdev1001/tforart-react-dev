import styles from "./NotFound.module.css";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError() as { message?: string };

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>404</h1>
        <p className={styles.errorMessage}>
          Trang bạn đang tìm kiếm không tồn tại
        </p>
        <button
          className={styles.backButton}
          onClick={() => (window.location.href = "/")}
        >
          Về trang chủ
        </button>
        {process.env.NODE_ENV === "development" && (
          <div className={styles.errorDetails}>
            {error?.message || "Không có thông tin lỗi"}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
