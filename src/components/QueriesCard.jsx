import { Link } from "react-router-dom";
import Heading from "../ui/Heading";
import styles from "./QueriesCard.module.css";
import { format } from "date-fns";
import Badge from "../ui/Badge";

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
          Raised on: <span>{format(query.raisedAt, "dd-MM-yyyy")}</span>
        </p>
      </div>

      <Badge
        value={query.status.toUpperCase()}
        type={query.status === "open" ? "primary" : "secondary"}
      />
      <Badge
        value={query.queryType.toUpperCase()}
        type={
          query.queryType === "product"
            ? "primary"
            : query.queryType === "order"
            ? "secondary"
            : "tertiary"
        }
      />
      <div className={styles.cta}>
        <Link to={`${query._id}`}>Open Query</Link>
      </div>
    </div>
  );
}

export default QueriesCard;
