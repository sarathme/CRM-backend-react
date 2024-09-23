import axios from "axios";

export async function getAllFeedbacks({ filter }) {
  let url = `${import.meta.env.VITE_API_URL}/api/v1/feedbacks`;
  if (filter !== null)
    url = `${import.meta.env.VITE_API_URL}/api/v1/feedbacks?${filter.field}=${
      filter.value
    }`;
  try {
    console.log(url);
    const res = await axios.get(url, {
      withCredentials: true,
    });

    return {
      feedbacks: res.data.data.feedbacks,
      totalFeedbacks: res.data.totalFeedbacks,
    };
  } catch (err) {
    console.log("Error 💥:", err);
    throw new Error(err.response.data.message);
  }
}
