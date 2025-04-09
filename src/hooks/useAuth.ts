import { loginSchema } from "@/schema/loginSchema";
import { auth } from "@/services/firebaseConfig";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Login form setup
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle login submission
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    NProgress.start();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("User logged in:", userCredential.user);
      toast.success("Đăng nhập thành công!");
      navigate("/portfolio/videos");
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Define a type for Firebase errors
        const firebaseError = error as unknown as { code: string };
        const errorCode = firebaseError.code; // Firebase errors might not be recognized as standard JS errors.
        const errorMessage = error.message;

        switch (errorCode) {
          case "auth/wrong-password":
            toast.error("Mật khẩu không đúng. Vui lòng kiểm tra lại!");
            break;
          case "auth/user-not-found":
            toast.error("Tài khoản không tồn tại.");
            break;
          case "auth/invalid-email":
            toast.error("Email không hợp lệ.");
            break;
          case "auth/too-many-requests":
            toast.error("Quá nhiều lần thử đăng nhập. Vui lòng thử lại sau!");
            break;
          default:
            toast.error(`Đã xảy ra lỗi: ${errorMessage}`);
            setError(true);
            break;
        }
      } else {
        toast.error("Đã xảy ra lỗi không xác định.");
      }
    } finally {
      NProgress.done();
      setLoading(false);
    }
  };

  // Handle sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        toast.error("Đã xảy ra lỗi khi đăng xuất.");
      });
  };

  // Check user authentication status
  useEffect(() => {
    const authInstance = getAuth();
    const unsubscribe = onAuthStateChanged(authInstance, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const checkIsLogin = user !== null;

  return { user, loading, form, onSubmit, handleSignOut, checkIsLogin, error };
};

export default useAuth;
