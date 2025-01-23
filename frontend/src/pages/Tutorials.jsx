import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Tutorial = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        // YouTube API URL to fetch fitness tutorials
        const response = await fetch(
          "https://www.googleapis.com/youtube/v3/search?part=snippet&q=fitness+tutorials&type=video&maxResults=5&key=AIzaSyBW2T6NO6CrJLInZQYDNztuTV_krNJGMM4"
        );
        
        // Check if the response is ok
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        
        // Parse the JSON response
        const data = await response.json();
        
        // Map over the results and create the necessary video data
        const videosData = data.items.map((item) => ({
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
        }));
        
        // Set the videos state with the fetched data
        setVideos(videosData);
      } catch (err) {
        setError("Failed to load videos.");
        console.error(err);
      }
      setLoading(false);
    };

    // Call the fetch function on component mount
    fetchVideos();
  }, []);

  return (
    <PageWrapper>
      <Title>Fitness Tutorials</Title>
      {loading && <Message>Loading videos...</Message>}
      {error && <Message>{error}</Message>}
      <VideosGrid>
        {videos.map((video) => (
          <VideoCard key={video.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Thumbnail src={video.thumbnail} alt={video.title} />
              <VideoTitle>{video.title}</VideoTitle>
            </a>
          </VideoCard>
        ))}
      </VideosGrid>
    </PageWrapper>
  );
};

export default Tutorial;

// Styled components
const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #ff4d4f;
  text-align: center;
  margin: 20px 0;
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const VideoCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const VideoTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  margin: 10px;
  text-align: center;
`;