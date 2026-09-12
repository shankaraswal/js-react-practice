import { useEffect, useState } from "react";
import GalleryCard from "../components/gallery-card";

const Gallery = () => {
    const [galleryPhotos, setGalleryPhotos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPhotosList = async () => {
            try {
                const response = await fetch("https://picsum.photos/v2/list", {
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response}`);
                }
                const photos = await response.json();
                setGalleryPhotos(photos);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Failed to load gallery photos");
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
    console.log(galleryPhotos)
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Photo Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryPhotos.map((gal) => (
                    <GalleryCard key={gal.id} gal={gal} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
