import axios from "axios";

export default async function handler(req, res) {
  const { country = "in", category = "general" } = req.query;

  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country,
        category,
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("NewsAPI Error:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
