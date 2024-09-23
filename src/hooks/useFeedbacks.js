import { useQuery } from "@tanstack/react-query";
import { getAllFeedbacks } from "../apiFeatures/apiFeedbacks";
import { useSearchParams } from "react-router-dom";

export function useFeedbacks() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("feedbackType");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "feedbackType", value: filterValue };

  const { isLoading, data, error } = useQuery({
    queryKey: ["feedbacks", filterValue],
    queryFn: () => getAllFeedbacks({ filter }),
  });

  return { isLoading, data, error };
}
