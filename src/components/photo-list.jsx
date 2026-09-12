import React, { useEffect, useState } from "react";
import ProductCard from "./photo-card";


export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPhotosList = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=100"
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        setPhotos(data); // Set the fetched array
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load photos");
      }
    };

    getPhotosList();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p>{error}</p>
      </div>
    );
  }


  return (
    <div className="w-5xl  mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Photo Gallery</h1>
      <div className="grid grid-cols-3 w-full  gap-6">
        {photos?.map((photo) => (
          <ProductCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

