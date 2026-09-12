// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
    const {
        id, 
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        availabilityStatus,
        thumbnail,
        tags,
        warrantyInformation,
        shippingInformation,
        returnPolicy,
        minimumOrderQuantity,
    } = product;

    const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

    const stockStyles =
        availabilityStatus === 'In Stock'
            ? 'text-green-600'
            : availabilityStatus === 'Low Stock'
            ? 'text-amber-600'
            : 'text-red-600';

    return (
        <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            {/* Image */}
            { id}
            <div className="flex h-44 items-center justify-center rounded-lg bg-gray-50">
                <img
                    src={thumbnail}
                    alt={title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                />
            </div>

            {/* Category + Brand */}
            <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {category}
                </span>
                {brand && (
                    <span className="text-xs text-gray-500">{brand}</span>
                )}
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-gray-900 line-clamp-1">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
                {description}
            </p>

            {/* Rating + Stock */}
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                    ⭐ {rating} <span className="text-gray-400">/ 5</span>
                </span>
                <span className={`text-xs font-semibold ${stockStyles}`}>
                    {availabilityStatus} ({stock})
                </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-emerald-600">
                    ${discountedPrice}
                </span>
                {discountPercentage > 0 && (
                    <>
                        <span className="text-sm text-gray-400 line-through">
                            ${price}
                        </span>
                        <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs font-semibold text-red-700">
                            -{discountPercentage.toFixed(0)}%
                        </span>
                    </>
                )}
            </div>

            {/* Tags */}
            {tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Extra Info */}
            <ul className="mt-1 flex flex-col gap-1 border-t border-gray-100 pt-2 text-xs text-gray-600">
                <li className="flex items-center gap-1.5">
                    <span>🛡️</span> {warrantyInformation}
                </li>
                <li className="flex items-center gap-1.5">
                    <span>🚚</span> {shippingInformation}
                </li>
                <li className="flex items-center gap-1.5">
                    <span>↩️</span> {returnPolicy}
                </li>
                <li className="flex items-center gap-1.5">
                    <span>📦</span> Min order: {minimumOrderQuantity}
                </li>
            </ul>
        </div>
    );
};

export default ProductCard;