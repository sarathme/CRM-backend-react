import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import { getAllProducts, getProductStats } from "../apiFeatures/apiProducts";

export function useProducts() {
  const [searchParams] = useSearchParams();

  const sort = searchParams.get("sort") || "-createdAt";
  const page = parseInt(searchParams.get("page") || 1, 10);

  const { isLoading, data, error } = useQuery({
    queryKey: ["products", page, sort],
    queryFn: () => getAllProducts({ page, limit: PAGE_SIZE, sort }),
  });

  return { isLoading, data, error, page };
}

export function useProductStats() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["productStats"],
    queryFn: getProductStats,
  });

  return { isLoading, data, error };
}
