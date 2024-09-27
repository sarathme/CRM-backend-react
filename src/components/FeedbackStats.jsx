import { HiMiniStar, HiSquare3Stack3D } from "react-icons/hi2";
import { useFeedbackStats } from "../hooks/useFeedbacks";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Stat from "../ui/Stat";
import Stats from "./Stats";

function FeedbackStats() {
  const { isLoading, data = {} } = useFeedbackStats();

  return (
    <>
      <Heading>Feedbacks</Heading>

      {isLoading && <Spinner />}
      {!isLoading && (
        <Stats>
          {data.feedbackStats.map((stat) => (
            <Stat
              key={stat._id}
              title="Total Feedbacks"
              group={stat._id}
              stat={stat.count}
              icon={<HiSquare3Stack3D />}
            />
          ))}
          {data.feedbackStats.map((stat) => (
            <Stat
              key={stat._id}
              title="Avg. Rating"
              group={stat._id}
              stat={Math.round(stat.avgRating * 10) / 10}
              icon={<HiMiniStar />}
            />
          ))}
        </Stats>
      )}
    </>
  );
}

export default FeedbackStats;
