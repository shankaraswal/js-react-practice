const GalleryCard = ({ gal }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <h3 className="uppercase p-4 font-semibold text-red-700">{gal.title}</h3>
      {/* Image Container - Maintain aspect ratio */}
      <div
        className="relative w-full"
        style={{ paddingBottom: `${(gal.height / gal.width) * 100}%` }}
      >
        
        <img
          src={gal.url}
          alt={`Photo by ${gal.author}`}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-600 mb-2">ID: {gal.id}</p>
        <h3 className="font-medium text-gray-800 mb-2 line-clamp-1">
          By {gal.author}
        </h3>

        <a
          href={gal.download_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
        >
          View on Unsplash
        </a>
      </div>
    </div>
  );
};

export default GalleryCard;


