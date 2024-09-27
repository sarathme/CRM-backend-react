import axios from "axios";

export async function getAllCustomers({ page, limit, filter }) {
  const url = `${import.meta.env.VITE_API_URL}/api/v1/customers`;
  // Contructing query parameter
  const queryParams = new URLSearchParams();

  if (filter && filter.status) {
    queryParams.append("status", filter.status);
  }

  // Pagination
  queryParams.append("page", page);
  queryParams.append("limit", limit);

  try {
    const res = await axios.get(`${url}?${queryParams.toString()}`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("crm-token")}`,
      },
    });

    return {
      customers: res.data.data.customers,
      totalCustomers: res.data.totalCustomers,
      totalPages: res.data.totalPages,
    };
  } catch (err) {
    console.error(err);
  }
}
