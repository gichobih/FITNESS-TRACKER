import axios from "axios";
import { createError } from "../error.js";

export const getFitnessTutorials = async (req, res, next) => {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const query = "fitness tutorials";
    const maxResults = 10;

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${fitness+tutorials}&type=video&maxResults=${7}&key=${AIzaSyBW2T6NO6CrJLInZQYDNztuTV_krNJGMM4}`
    );

    // Map and extract relevant data from the response
    const videos = response.data.items.map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }));

    // Return the structured response
    return res.status(200).json({
      success: true,
      count: videos.length,
      videos,
    });
  } catch (err) {
    console.error("Error Response:", err.response?.data || err.message);
    return next(createError(500, "Failed to fetch fitness tutorials"));
  }  
};