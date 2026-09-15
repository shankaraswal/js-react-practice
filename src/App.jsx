import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "./components/ErrorFallback"

import Home from "./components/home";
import ProductList from "./components/product-list";
import RecipeList from "./components/recipe-list";
import HookProductList from "./components/hook-productlist";
import TodoList from "./components/todo-list";
import PhotoCard from "./components/photo-list";
import Gallery from "./pages/gallery";

import NotFound from "./components/not-found";
// import ErrorBoundary from "./components/error-boundry";
import { DataContext } from "./context";

const Virtualization = lazy(() => import("./components/Virtualization"));
const UseMemo = lazy(() => import("./components/UseMemo"));
const UseCallback = lazy(() => import("./components/UseCallback"));
const Debouncing = lazy(() => import("./components/Debouncing"));
const AddEventListener = lazy(() => import("./components/AddEventListener"));
const Coforge = lazy(() => import("./components/Coforge"));
const Coforge1 = lazy(() => import("./components/Coforge1"));
const JsPractice = lazy(() => import("./components/JsPractice"));
const AsyncApi = lazy(() => import("./components/AsyncApi"));
const UseApiProductList = lazy(() => import("./components/UseApiProductList"));
const AsyncApiVirtualization = lazy(() => import("./components/AsyncApiVirtualization"));
const JSDecodes = lazy(() => import("./components/js-decodes/"));
const ReactComps = lazy(() => import("./components/js-decodes/ReactComps"));


const menu = [
  {
    title: "Getting Started",
    items: [
      { name: "Home", path: "/" },
      { name: "Todo List", path: "/todo" },
      { name: "Event Listener", path: "/elistener" },
      { name: "Coforge", path: "/coforge" }
    ],
  },
  {
    title: "JS Practice",
    items: [
      { name: "JS Practice", path: "/jspractice" },
    ],
  },
  {
    title: "React Concepts",
    items: [
      { name: "Hook useMemo", path: "/usememo" },
      { name: "Hook useCallback", path: "/usecallback" },
      { name: "Debouncing", path: "/debouncing" },
      { name: "Async Api Request", path: "/async-api" },
      { name: "Async Api Virtualization", path: "/async-api-virtualization" },
      { name: "ProductList use() API", path: "/use-api" },


    ],
  },
  {
    title: "Data & Components",
    items: [
      { name: "Products", path: "/products" },
      { name: "Recipes", path: "/recipes" },
      { name: "Hook Products", path: "/hook-products" },
      { name: "Gallery", path: "/gallery" },
      { name: "Photos", path: "/photos" },
    ],
  },
  {
    title: "Core JS: JS Decodes",
    items: [
      { name: "JS Decodes", path: "/js-decodes" },
      { name: "React Practice", path: "/react-comps" },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-gray-50 p-4">

      <h1 className="mb-6 text-xl font-bold text-gray-800">
        React Examples
      </h1>

      <nav className="space-y-6">

        {menu.map((section) => (
          <div key={section.title}>

            <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {section.title}
            </h2>

            <div className="space-y-1">

              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm transition
                    ${isActive
                      ? "bg-teal-600 font-medium text-white"
                      : "text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </div>
          </div>
        ))}

      </nav>
    </aside>
  );
}

function Loading() {
  return (
    <div className="flex h-40 items-center justify-center">
      <div className="text-gray-500">
        Loading...
      </div>
    </div>
  );
}

export default function App() {

  const dataValue = {
    name: "liechtenstein",
  };

  return (
    <DataContext.Provider value={dataValue}>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="h-14 border-b border-gray-200 px-6 flex items-center">
          <div className="text-lg font-bold text-teal-700">
            React / Frontend Examples
          </div>
        </header>
        {/* Main Layout */}
        <div className="flex min-h-[calc(100vh-56px)]">
          {/* Sidebar */}
          <Sidebar />

          {/* Content */}
          <main className="min-w-0 flex-1 ">
            <div className="mx-auto w-full p-8 bg-orange-50">
              <Routes>

                <Route
                  path="/"
                  element={<Home />}
                />

                <Route
                  path="/todo"
                  element={<TodoList />}
                />

                <Route
                  path="/products"
                  element={<ProductList />}
                />

                <Route
                  path="/recipes"
                  element={<RecipeList />}
                />

                <Route
                  path="/hook-products"
                  element={<HookProductList />}
                />

                <Route
                  path="/gallery"
                  element={<Gallery />}
                />

                <Route
                  path="/photos"
                  element={<PhotoCard />}
                />

                <Route
                  path="/virtualiztion"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Virtualization />
                    </Suspense>
                  }
                />

                <Route
                  path="/usememo"
                  element={
                    <Suspense fallback={<Loading />}>
                      <UseMemo />
                    </Suspense>
                  }
                />

                <Route
                  path="/usecallback"
                  element={
                    <Suspense fallback={<Loading />}>
                      <UseCallback />
                    </Suspense>
                  }
                />

                <Route
                  path="/debouncing"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Debouncing />
                    </Suspense>
                  }
                />

                <Route
                  path="/elistener"
                  element={
                    <Suspense fallback={<Loading />}>
                      <AddEventListener />
                    </Suspense>
                  }
                />
                <Route
                  path="/coforge"
                  element={
                    <Suspense fallback={<Loading />}>
                      <>
                        <Coforge />
                        <Coforge1 />
                      </>
                    </Suspense>
                  }
                />

                <Route
                  path="/jspractice"
                  element={
                    <Suspense fallback={<Loading />}>
                      <JsPractice />
                    </Suspense>
                  }
                />


                <Route
                  path="/async-api"
                  element={
                    <ErrorBoundary
                      onError={(error, info) => {
                        console.log('Boundary catched:', error.message);
                        console.log('Component stack:', info.componentStack);
                      }}
                      fallback={<p className="p-4 text-red-600">ERROR FOUND: BOUNDARIES</p>}
                    // FallbackComponent={ErrorFallback}
                    >
                      <Suspense fallback={<Loading />}>
                        <AsyncApi />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/async-api-virtualization"
                  element={
                    <ErrorBoundary
                      onError={(error, info) => {
                        console.log('Boundary catched:', error.message);
                        console.log('Component stack:', info.componentStack);
                      }}
                      fallback={<p className="p-4 text-red-600">ERROR FOUND: BOUNDARIES</p>}
                    // FallbackComponent={ErrorFallback}
                    >
                      <Suspense fallback={<Loading />}>
                        <AsyncApiVirtualization />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/use-api"
                  element={
                    <ErrorBoundary
                      onError={(error, info) => {
                        console.log('Boundary catched:', error.message);
                        console.log('Component stack:', info.componentStack);
                      }}
                      fallback={<p className="p-4 text-red-600">ERROR FOUND: via using use() api -- UseApiProductList</p>}
                    // FallbackComponent={ErrorFallback}
                    >
                      <Suspense fallback={<Loading />}>
                        <UseApiProductList />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/js-decodes"
                  element={
                    <ErrorBoundary
                      onError={(error, info) => {
                        console.log('Boundary catched:', error.message);
                        console.log('Component stack:', info.componentStack);
                      }}
                      // FallbackComponent={ErrorFallback}
                      fallback={<p className="p-4 text-red-600">ERROR FOUND: js-decodes component</p>}
                    >
                      <Suspense fallback={<Loading />}>
                        <JSDecodes />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />

                <Route
                  path="/react-comps"
                  element={
                    <ErrorBoundary
                      onError={(error, info) => {
                        console.log('Boundary catched:', error.message);
                        console.log('Component stack:', info.componentStack);
                      }}
                      // FallbackComponent={ErrorFallback}
                      fallback={<p className="p-4 text-red-600">ERROR FOUND: react practice component</p>}
                    >
                      <Suspense fallback={<Loading />}>
                        <ReactComps />
                      </Suspense>
                    </ErrorBoundary>
                  }
                />

                <Route
                  path="*"
                  element={<NotFound />}
                />
              </Routes>
            </div>
          </main>
        </div>
      </div>

    </DataContext.Provider>
  );
}