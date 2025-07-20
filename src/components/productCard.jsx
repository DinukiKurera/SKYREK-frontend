export default function ProductCard(props) {
  const { name, image, price } = props;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">
      {/* Product image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {name}
        </h2>

        <p className="mt-auto text-xl font-bold text-emerald-600">
          {typeof price === 'number' ? `Rs. ${price.toLocaleString()}` : price}
        </p>

        <button
          className="mt-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          View more
        </button>
      </div>
    </div>
  );
}
