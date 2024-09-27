import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import { getAllCustomers } from "../apiFeatures/apiCustomers";

export function useCustomers() {
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");

  const filter = !status || status === "all" ? null : { status };

  const page = parseInt(searchParams.get("page"), 10) || 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ["customers", page, PAGE_SIZE, status],
    queryFn: () => getAllCustomers({ page, limit: PAGE_SIZE, filter }),
  });

  return { isLoading, data, error, page };
}
