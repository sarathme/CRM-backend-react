import { Link } from "react-router-dom";
import Heading from "../ui/Heading";
import styles from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div className={styles.container}>
      <Heading>Page Not Found</Heading>
      <Link to="/app">Return to App</Link>
    </div>
  );
}

export default PageNotFound;
