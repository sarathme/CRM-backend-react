import styles from "./Feedbacks.module.css";
import FeedbackCard from "../components/FeedbackCard";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import { useFeedbacks } from "../hooks/useFeedbacks";

function Feedbacks() {
  const { isLoading, data } = useFeedbacks();

  if (isLoading) return <p>Loading....</p>;

  const { feedbacks, totalFeedbacks } = data;

  return (
    <>
      <Heading>Feedbacks</Heading>
      <Row type="horizantal">
        <Filter
          filter="feedbackType"
          options={[
            { value: "all", label: "All" },
            { value: "product", label: "Products" },
            { value: "service", label: "Service" },
          ]}
        />
      </Row>
      <div className={styles.content}>
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
      <div className={styles.footer}>
        <p>
          Showing <span>1</span> to <span>20</span> of{" "}
          <span>{totalFeedbacks}</span> Results
        </p>
        <div>Buttons</div>
      </div>
    </>
  );
}

export default Feedbacks;
