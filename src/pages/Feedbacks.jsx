import { useFeedbacks } from "../hooks/useFeedbacks";

import FeedbackCard from "../components/FeedbackCard";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Paginate from "../ui/Paginate";
import Row from "../ui/Row";
import TabContent from "../components/TabContent";
import TabFooter from "../components/TabFooter";

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
      <TabContent>
        {!feedbacks.length && <p>No Results Found</p>}
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </TabContent>
      {totalPages > 1 && (
        <TabFooter>
          <Paginate
            page={page}
            totalPages={totalPages}
            totalDocs={totalFeedbacks}
          />
        </TabFooter>
      )}
    </>
  );
}

export default Feedbacks;
