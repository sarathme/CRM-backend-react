import { HiSquare3Stack3D } from "react-icons/hi2";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Stat from "../ui/Stat";
import Stats from "./Stats";
import { useProductStats } from "../hooks/useProducts";

function ProductStats() {
  const { isLoading, data = {} } = useProductStats();

  return (
    <>
      <Heading>Product Statistics</Heading>

      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <Heading type="secondary">Products Per Catogary</Heading>
          <Stats>
            {data.productsPerCatogary.map((stat) => (
              <Stat
                key={stat._id}
                title="Total Products"
                group={stat._id}
                stat={stat.count}
                icon={<HiSquare3Stack3D />}
              />
            ))}
          </Stats>
        </>
      )}
    </>
  );
}

export default ProductStats;
