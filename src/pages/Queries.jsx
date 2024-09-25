import QueriesCard from "../components/QueriesCard";
import TabContent from "../components/TabContent";
import TabFooter from "../components/TabFooter";
import { useQueries } from "../hooks/useQueries";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Paginate from "../ui/Paginate";
import Row from "../ui/Row";

function Queries() {
  const { data, isLoading, page } = useQueries();

  if (isLoading) return <p>Loading....</p>;

  const { queries, totalPages, totalQueries } = data;

  return (
    <>
      <Heading>Queries</Heading>
      <Row type="horizantal">
        <Filter
          filter="queryType"
          options={[
            { value: "all", label: "All" },
            { value: "product", label: "Products" },
            { value: "order", label: "Order" },
            { value: "other", label: "Others" },
          ]}
        />
        <Filter
          filter="status"
          options={[
            { value: "all", label: "All" },
            { value: "open", label: "Open" },
            { value: "resolved", label: "Resolved" },
          ]}
        />
      </Row>
      <TabContent>
        {!queries.length && <p>No Results Found</p>}
        {queries.map((query) => (
          <QueriesCard key={query._id} query={query} />
        ))}
      </TabContent>
      {totalPages > 1 && (
        <TabFooter>
          <Paginate
            page={page}
            totalPages={totalPages}
            totalDocs={totalQueries}
          />
        </TabFooter>
      )}
    </>
  );
}

export default Queries;
