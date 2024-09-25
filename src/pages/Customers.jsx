import TabContent from "../components/TabContent";
import TabFooter from "../components/TabFooter";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Paginate from "../ui/Paginate";
import Row from "../ui/Row";

function Customers() {
  return (
    <>
      <Heading>Customers</Heading>
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
      <TabContent></TabContent>
      <TabFooter>
        <Paginate page={1} totalPages={2} totalFeedbacks={46} />
      </TabFooter>
    </>
  );
}

export default Customers;
