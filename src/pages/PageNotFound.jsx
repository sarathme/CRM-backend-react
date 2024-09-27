import { Link } from "react-router-dom";
import Heading from "../ui/Heading";
import styles from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div className={styles.container}>
      <Heading>This Route is not defined</Heading>
      <Link to={-1}>Return to App</Link>
    </div>
  );
}

export default PageNotFound;
