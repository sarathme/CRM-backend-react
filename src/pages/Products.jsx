import TabContent from "../components/TabContent";
import TabFooter from "../components/TabFooter";
import { useProducts } from "../hooks/useProducts";

import Heading from "../ui/Heading";
import Paginate from "../ui/Paginate";
import Row from "../ui/Row";
import SortBy from "../ui/SortBy";
import Spinner from "../ui/Spinner";
import Table from "../ui/Table";
import TableHeader from "../ui/TableHeader";
import TableRow from "../ui/TableRow";

function Products() {
  const { data = {}, isLoading, page } = useProducts();

  const { totalPages, totalProducts, products } = data;
  return (
    <>
      <Heading>Products</Heading>
      <Row type="horizantal">
        <SortBy
          options={[
            {
              value: "-createdAt",
              label: "Recently Updated",
            },
            { value: "-stockAvailable", label: "High to low stocks" },
            { value: "stockAvailable", label: "Low to high stocks" },
            { value: "productCatogary", label: "Product Catogary (A-Z)" },
            { value: "-productCatogary", label: "Product Catogary (Z-A)" },
            {
              value: "productCatogary,stockAvailable",
              label: "Low Stocks By Catogary (A-Z)",
            },
            {
              value: "productCatogary,-stockAvailable",
              label: "High Stocks By Catogary (A-Z)",
            },
          ]}
        />
      </Row>
      <TabContent>
        {isLoading && <Spinner />}
        {!isLoading && (
          <Table>
            <TableHeader>
              <Heading type="secondary">Name</Heading>
              <Heading type="secondary">Material</Heading>
              <Heading type="secondary">Catogary</Heading>
              <Heading type="secondary">Stock Available</Heading>
              <Heading type="secondary">Price</Heading>
              <Heading type="secondary">Stock Last Updated</Heading>
            </TableHeader>
            {!products.length && <p>No products Available</p>}
            {products.map((product) => (
              <TableRow key={product._id} data={product} />
            ))}
          </Table>
        )}
      </TabContent>
      <TabFooter>
        <Paginate
          page={page}
          totalPages={totalPages}
          totalDocs={totalProducts}
        />
      </TabFooter>
    </>
  );
}

export default Products;
