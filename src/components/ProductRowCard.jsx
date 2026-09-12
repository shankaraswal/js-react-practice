
const ProductRowCard = ({ product }) => {
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
        <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            {/* 👇 Row ke andar multiple columns */}
            <div className="grid grid-cols-12 gap-4 items-start">

                {/* Col 1: Image */}
                <div className="col-span-12 sm:col-span-3 lg:col-span-2 flex items-center justify-center rounded-lg bg-gray-50 p-2">
                <span className="absolute left-0 top-0 flex-none bg-sky-500 text-white px-4 py-2 cursor-pointer rounded-full">{id}</span>
                    <img
                        src={thumbnail}
                        alt={title}
                        className="max-h-32 w-auto object-contain"
                        loading="lazy"
                    />
                </div>

                {/* Col 2: Title + Description + Tags */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                            {category}
                        </span>
                        {brand && <span className="text-xs text-gray-500">• {brand}</span>}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 line-clamp-1">
                        {title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">
                        {description}
                    </p>

                    {tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {tags.slice(0, 4).map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Col 3: Rating + Stock */}
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-1">
                    <span className="text-sm text-gray-700">
                        ⭐ {rating} <span className="text-gray-400">/ 5</span>
                    </span>
                    <span className={`text-xs font-semibold ${stockStyles}`}>
                        {availabilityStatus} ({stock})
                    </span>
                </div>

                {/* Col 4: Price */}
                <div className="col-span-6 sm:col-span-12 lg:col-span-2 flex flex-col gap-1">
                    <span className="text-lg font-bold text-emerald-600">
                        ${discountedPrice}
                    </span>
                    {discountPercentage > 0 && (
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400 line-through">
                                ${price}
                            </span>
                            <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs font-semibold text-red-700">
                                -{discountPercentage.toFixed(0)}%
                            </span>
                        </div>
                    )}
                </div>

                {/* Col 5: Extra Info */}
                <div className="col-span-12 lg:col-span-1 flex flex-col gap-1 text-xs text-gray-600">
                    <span title={warrantyInformation}>🛡️</span>
                    <span title={shippingInformation}>🚚</span>
                    <span title={returnPolicy}>↩️</span>
                    <span title={`Min order: ${minimumOrderQuantity}`}>📦</span>
                </div>
            </div>
        </div>
    );
};

export default ProductRowCard;