import useProducts from '../hooks/useProductList';

const HookProductList = () => {
  const { data: products, loading, error } = useProducts();

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products) return <div>No products found</div>;


  return (
    <div className="grid grid-cols-3 gap-10 w-full">
       {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Product Image */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
              />
              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {product.category}
              </span>
              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                <span className="text-yellow-500 font-bold">★</span>
                <span className="text-gray-800 font-bold">{product.rating.rate}</span>
                <span className="text-gray-500 text-xs">({product.rating.count})</span>
              </div>
            </div>

            {/* Product Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 h-20">
                {product.description}
              </p>

              {/* Price and Actions */}
              <div className="flex flex-col items-center justify-between mt-6">
                {/* Price */}
                <div className="text-right py-2 w-full">
                  <span className="text-3xl font-bold text-gray-900">£{product.price}</span>
                  <span className="text-gray-500 text-sm ml-1">GBP</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-2 justify-between items-center w-full mt-4">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Wishlist
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  In Stock
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Free Delivery
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  30-Day Return
                </span>
              </div>
            </div>
          </div>
         ))}

     
    </div>
  );
};

export default HookProductList;