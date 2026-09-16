import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const SearchableList = () => {
  const [products, setProducts] = reactExports.useState([]);
  const [error, setError] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchkey, setSearchkey] = reactExports.useState("");
  const [sortOrder, setSortOrder] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://fakestoreapi.com/products"
        );
        const results = await res.json();
        setProducts(results);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
        throw new Error(`Have an errror ${err}`);
      }
    };
    getProducts();
  }, []);
  const handleSort = (order) => {
    setSortOrder(order);
  };
  const data = [...products].filter(
    (item) => item.title.toLowerCase().includes(searchkey.toLowerCase())
  ).sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    }
    if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "min-h-50 bg-red-100 flex justify-center items-center", children: "No data available" });
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "min-h-50 bg-teal-100 flex justify-center items-center", children: "Data loading..." });
  if (!products.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "min-h-50 bg-sky-100 flex justify-center items-center", children: "No products available" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg mb-4 text-sky-700 font-bold", children: " Search Filter" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Given an array of items: "https://fakestoreapi.com/products"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "There should be a search input field" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "When the user types, only items containing the search text should be shown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The search should be case insensitive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'If no match is found, show "No results found"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Clearing the input field should bring back all items" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl mb-4 text-orange-600 font-bold", children: "Product List " }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FilterData, { searchKey: setSearchkey }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sorting, { handleSort })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col max-w-full mt-4 h-250 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          !data.length && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "no records found" }),
          data.map((product, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { seq: ind + 1, product }, ind))
        ] }) })
      ] })
    ] })
  ] });
};
const FilterData = ({ searchKey }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-2 justify-center items-center pr-6 border-r-2 border-gray-400", children: [
    "Search:",
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        onChange: (e) => searchKey(e.target.value),
        className: "w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow",
        placeholder: "Type here..."
      }
    )
  ] });
};
const Sorting = ({ handleSort }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex text-orange-800 gap-2 items-center justify-center gap-4 flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Order By: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        className: "border border-sky-200 p-3",
        onChange: (e) => handleSort(e.target.value),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "asc", children: "Low to High" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "desc", children: "High to Low" })
        ]
      }
    )
  ] });
};
const ProductCard = ({ product, seq }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm rounded-xl border hover:bg-sky-50 border-gray-200 bg-white p-4 shadow-md hover:shadow-lg transition relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute w-8 h-8 top-0 left-0 bg-teal-600 text-white rounded-full py-1 px-3", children: seq }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 flex items-center justify-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: product.image,
        alt: product.title,
        className: "h-24 max-w-full object-contain"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500 capitalize absolute right-2 top-2", children: product.category }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 text-sm font-semibold line-clamp-2", children: product.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-600 line-clamp-2 ", children: product.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 gap-2 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-green-600", children: [
        "$",
        product.price
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md bg-yellow-100 px-2 py-1 text-sm", children: [
        "⭐ ",
        product.rating.rate
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "w-auto rounded-md bg-sky-600 py-1 px-4 hover:cursor-pointer text-white hover:bg-sky-700",
          children: "Add to cart"
        }
      )
    ] })
  ] });
};
export {
  SearchableList as default
};
