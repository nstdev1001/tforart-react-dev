import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

const LoadingBar = () => {
  //   const location = useLocation();

  useEffect(() => {
    NProgress.start();
    setTimeout(() => NProgress.done(), 500);
  }, []);

  return null;
};

export default LoadingBar;
