import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YOUR_API_KEY&limit=3`
        );
        const data = await response.json();
        console.log(data.data)
        setGifs(data.data);
      } catch (error) {
        console.error("Error fetching gifs:", error);
      }
    };

   
   if (searchTerm !== "") {
     fetchGifs();
   }
    
  }, [searchTerm]);

  const handleSubmit = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <GifSearch onSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
