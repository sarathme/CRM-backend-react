import { Link } from "react-router-dom";
import Heading from "../ui/Heading";
import styles from "./QueriesCard.module.css";

function QueriesCard({ query }) {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <Heading type="secondary">{query.subject}</Heading>
        <p>
          Raised By:{" "}
          <span>{`${query.customerId.firstName} ${query.customerId.lastName}`}</span>
        </p>
        <p>
          Raised on: <span>Date</span>
        </p>
      </div>

      <div className={styles.typeBadge}>
        <h3>{query.status.toUpperCase()}</h3>
      </div>
      <div className={styles.typeBadge}>
        <h3>{query.queryType.toUpperCase()}</h3>
      </div>
      <div className={styles.cta}>
        <Link>Open Query</Link>
      </div>
    </div>
  );
}

export default QueriesCard;
