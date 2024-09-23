import { useQuery } from "@tanstack/react-query";
import { getAllFeedbacks } from "../apiFeatures/apiFeedbacks";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

export function useFeedbacks() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("feedbackType");
  const page = parseInt(searchParams.get("page") || 1, 10);

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { feedbackType: filterValue };

  const { isLoading, data, error } = useQuery({
    queryKey: ["feedbacks", filterValue, page],
    queryFn: () => getAllFeedbacks({ filter, page, limit: PAGE_SIZE }),
  });

  return { isLoading, data, error, page };
}
