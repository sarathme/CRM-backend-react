import styles from "./Feedbacks.module.css";
import { useFeedbacks } from "../hooks/useFeedbacks";

import FeedbackCard from "../components/FeedbackCard";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Paginate from "../ui/Paginate";
import Row from "../ui/Row";

function Feedbacks() {
  const { isLoading, data, page } = useFeedbacks();

  if (isLoading) return <p>Loading....</p>;

  const { feedbacks, totalFeedbacks, totalPages } = data;

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
        {!feedbacks.length && <p>No Results Found</p>}
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className={styles.footer}>
          <Paginate
            page={page}
            totalPages={totalPages}
            totalFeedbacks={totalFeedbacks}
          />
        </div>
      )}
    </>
  );
}

export default Feedbacks;
