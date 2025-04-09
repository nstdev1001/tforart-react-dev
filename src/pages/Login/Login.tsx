import FormContent from "./LoginForm";
import Layout from "@/components/Layout/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="login_container mt-[200px] flex justify-center">
        <FormContent />
      </div>
    </Layout>
  );
};

export default Login;
