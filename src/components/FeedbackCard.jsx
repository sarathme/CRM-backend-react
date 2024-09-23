import { Link } from "react-router-dom";
import styles from "./FeedbackCard.module.css";
function FeedbackCard({ feedback }) {
  return (
    <div className={styles.feedbackCard}>
      <div className={styles.feedbackBody}>
        <h3>{feedback.subject}</h3>
        <p>
          Given By:{" "}
          <span>{`${feedback.customerId.firstName} ${feedback.customerId.lastName}`}</span>
        </p>
        <p>
          Date: <span></span>
        </p>
      </div>
      <div className={styles.rating}>
        <h3>Rated</h3>
        <p>{feedback.rating.toFixed(1)}</p>
      </div>
      <div className={styles.typeBadge}>
        <h3>{feedback.feedbackType.toUpperCase()}</h3>
      </div>
      <div className={styles.cta}>
        <Link>Learn More</Link>
      </div>
    </div>
  );
}

export default FeedbackCard;
