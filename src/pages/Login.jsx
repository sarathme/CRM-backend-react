import { useFormik } from "formik";
import InputGroup from "../components/InputGroup";
import { useAuth } from "../contexts/authContextProvider";
import styles from "./Login.module.css";
import SpinnerMini from "../ui/SpinnerMini";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const initialValues = {
  empCode: "",
  password: "",
};

function validate(values) {
  let errors = {};
  if (!values.empCode) {
    errors.empCode = "Please provide your employee code";
  }

  if (!values.password) {
    errors.password = "Please provide your password";
  } else if (values.password.length < 8) {
    errors.password = "Password should contain atleast 8 characters";
  }

  return errors;
}

function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      console.log(values);
      console.log(`Submit`);
      const loginToast = toast.loading("Logging In Please Wait");
      try {
        await login(values);
        toast.success("Logged in successfully");
        formik.setSubmitting(false);
        navigate("/app");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      } finally {
        toast.dismiss(loginToast);
      }
    },
  });
  if (isAuthenticated) return <Navigate to="/app" replace />;
  return (
    <form
      className={styles.container}
      noValidate
      onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
      <InputGroup
        label="Employee Code"
        labelFor="empCode"
        placeholderText="Enter Employee Code"
        type="text"
        value={formik.empCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.empCode && formik.errors.empCode}
        errMsg={formik.errors.empCode}
        autoComplete="username"
        disabled={formik.isSubmitting}
      />
      <InputGroup
        label="Password"
        labelFor="password"
        placeholderText="Enter Password"
        type="password"
        value={formik.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
        errMsg={formik.errors.password}
        autoComplete="current-password"
        disabled={formik.isSubmitting}
      />

      <button type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? <SpinnerMini /> : "Login"}
      </button>
    </form>
  );
}

export default Login;
