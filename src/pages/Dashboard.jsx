import Heading from "../ui/Heading";
import TabContent from "../components/TabContent";
import { useFeedbackStats } from "../hooks/useFeedbacks";
import Stats from "../components/Stats";
import Stat from "../ui/Stat";
import { HiMiniStar, HiSquare3Stack3D } from "react-icons/hi2";
import { useQueryStats } from "../hooks/useQueries";

function Dashboard() {
  const { isLoading, data } = useFeedbackStats();
  const { isLoading: queryLoading, data: queryStatsData } = useQueryStats();

  if (isLoading || queryLoading) return <p>Loading...</p>;
  console.log(queryStatsData.queryStatusStats);
  return (
    <>
      <Heading>Dashboard</Heading>
      <div></div>
      <TabContent>
        <Heading>Feedbacks</Heading>
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
        <Heading>Queries</Heading>
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
      </TabContent>
    </>
  );
}

export default Dashboard;
