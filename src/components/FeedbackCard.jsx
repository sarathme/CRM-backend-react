import { Link } from "react-router-dom";
import styles from "./FeedbackCard.module.css";
import { format } from "date-fns";
import Badge from "../ui/Badge";
function FeedbackCard({ feedback }) {
  return (
    <div className={styles.feedbackCard}>
      <div className={styles.feedbackBody}>
        <h3>{feedback.subject}</h3>
        <p>
          Customer Name:{" "}
          <span>{`${feedback.customerId.firstName} ${feedback.customerId.lastName}`}</span>
        </p>
        <p>
          Given At: <span>{format(feedback.givenAt, "dd-MM-yyyy")}</span>
        </p>
      </div>
      <div className={styles.rating}>
        <h3>Rated</h3>
        <p>{feedback.rating.toFixed(1)}</p>
      </div>
      <Badge
        value={feedback.feedbackType.toUpperCase()}
        type={feedback.feedbackType === "product" ? "primary" : "secondary"}
      />
      <div className={styles.cta}>
        <Link to={`${feedback._id}`}>View</Link>
      </div>
    </div>
  );
}

export default FeedbackCard;
