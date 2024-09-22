import InputGroup from "../components/InputGroup";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <InputGroup
        label="Employee Code"
        labelFor="empCode"
        placeholderText="Enter Employee Code"
        type="email"
      />
      <InputGroup
        label="Password"
        labelFor="password"
        placeholderText="Enter Password"
        type="password"
      />

      <button type="submit">Login</button>
    </div>
  );
}

export default Login;
