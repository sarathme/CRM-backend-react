import { HiSquare3Stack3D } from "react-icons/hi2";

import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Stat from "../ui/Stat";
import Stats from "./Stats";
import { useQueryStats } from "../hooks/useQueries";

function FeedbackStats() {
  const { isLoading, data: queryStatsData } = useQueryStats();
  return (
    <>
      <Heading>Queries</Heading>

      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <Stats>
            {queryStatsData.queryStats.map((stat) => (
              <Stat
                key={stat._id}
                title="Total Queries"
                group={stat._id}
                stat={stat.count}
                icon={<HiSquare3Stack3D />}
              />
            ))}
          </Stats>
          <Stats>
            {queryStatsData.queryStatusStats.map((stat) => (
              <Stat
                icon={<HiSquare3Stack3D />}
                key={stat._id}
                title="Queries"
                group={stat._id}
                stat={stat.count}
              />
            ))}
          </Stats>
        </>
      )}
    </>
  );
}

export default FeedbackStats;
