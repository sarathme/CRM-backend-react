import axios from "axios";

export async function getAllProducts({ page, limit, sort }) {
  let url = `${import.meta.env.VITE_API_URL}/api/v1/products`;

  // Contructing query parameter
  const queryParams = new URLSearchParams();

  queryParams.append("sort", sort);

  // Filter
  // if (filter && filter.feedbackType) {
  //   queryParams.append("feedbackType", filter.feedbackType);
  // }

  // Pagination
  queryParams.append("page", page);
  queryParams.append("limit", limit);

  try {
    const res = await axios.get(`${url}?${queryParams.toString()}`, {
      withCredentials: true,
    });

    return {
      products: res.data.data.products,
      totalProducts: res.data.totalProducts,
      totalPages: res.data.totalPages,
    };
  } catch (err) {
    console.log("Error 💥:", err);
    throw new Error(err.response.data.message);
  }
}

export async function getProductStats() {
  let url = `${import.meta.env.VITE_API_URL}/api/v1/products/stats`;

  try {
    const res = await axios.get(url, {
      withCredentials: true,
    });

    return {
      productsPerCatogary: res.data.data.productsPerCatogary,
    };
  } catch (err) {
    console.error(err);
    throw new Error(err.response.data.message);
  }
}
