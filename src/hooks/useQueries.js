import { useQuery } from "@tanstack/react-query";
import { getAllQueries, getQueryStats } from "../apiFeatures/apiQueries";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

export function useQueries() {
  const [searchParams] = useSearchParams();

  // Filter
  const queryType = searchParams.get("queryType");
  const status = searchParams.get("status");
  const page = parseInt(searchParams.get("page") || 1, 10);
  let filter = {};
  if (queryType && queryType !== "all") {
    filter.queryType = queryType;
  }

  if (status && status !== "all") {
    filter.status = status;
  }

  console.log(filter);

  const { isLoading, data, error } = useQuery({
    queryKey: ["queries", queryType, status, page],
    queryFn: () => getAllQueries({ filter, page, limit: PAGE_SIZE }),
  });

  return { isLoading, data, error, page };
}

export function useQueryStats() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["querieStats"],
    queryFn: () => getQueryStats(),
  });

  return { isLoading, data, error };
}
