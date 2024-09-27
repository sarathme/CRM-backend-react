import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import { getAllCustomers } from "../apiFeatures/apiCustomers";

export function useCustomers() {
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page"), 10) || 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ["customers", page, PAGE_SIZE],
    queryFn: () => getAllCustomers({ page, limit: PAGE_SIZE }),
  });

  return { isLoading, data, error, page };
}
