import CustomerCard from "../components/CustomerCard";
import TabContent from "../components/TabContent";
import TabFooter from "../components/TabFooter";
import { useCustomers } from "../hooks/useCustomers";
import Filter from "../ui/Filter";
import Heading from "../ui/Heading";
import Paginate from "../ui/Paginate";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

function Customers() {
  const { isLoading, data = {}, page } = useCustomers();

  const { customers, totalCustomers, totalPages } = data;

  return (
    <>
      <Heading>Customers</Heading>
      <Row type="horizantal">
        <Filter
          filter="status"
          options={[
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
            { value: "new", label: "New" },
          ]}
        />
      </Row>
      <TabContent>
        {isLoading && <Spinner />}
        {!isLoading && customers.length === 0 && <p>No Records Found</p>}
        {!isLoading &&
          customers.map((customer) => (
            <CustomerCard key={customer._id} customer={customer} />
          ))}
      </TabContent>
      {totalPages > 1 && (
        <TabFooter>
          <Paginate
            page={page}
            totalPages={totalPages}
            totalDocs={totalCustomers}
          />
        </TabFooter>
      )}
    </>
  );
}

export default Customers;
