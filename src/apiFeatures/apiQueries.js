import axios from "axios";

export async function getAllQueries({ filter, page, limit }) {
  let url = `${import.meta.env.VITE_API_URL}/api/v1/queries`;

  // Contructing query parameter
  const queryParams = new URLSearchParams();

  // Filter
  if (filter && filter.queryType) {
    queryParams.append("queryType", filter.queryType);
  }

  if (filter && filter.status) {
    queryParams.append("status", filter.status);
  }

  // Pagination
  queryParams.append("page", page);
  queryParams.append("limit", limit);

  try {
    const res = await axios.get(`${url}?${queryParams.toString()}`, {
      withCredentials: true,
    });

    return {
      queries: res.data.data.queries,
      totalQueries: res.data.totalqueries,
      totalPages: res.data.totalPages,
    };
  } catch (err) {
    console.log("Error 💥:", err);
    throw new Error(err.response.data.message);
  }
}

export async function getQueryStats() {
  let url = `${import.meta.env.VITE_API_URL}/api/v1/queries/stats`;
  try {
    const res = await axios.get(`${url}`, {
      withCredentials: true,
    });

    return {
      queryStats: res.data.data.stats,
      queryStatusStats: res.data.data.stats2,
    };
  } catch (err) {
    console.log("Error 💥:", err);
    throw new Error(err.response.data.message);
  }
}
