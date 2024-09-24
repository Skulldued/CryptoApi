import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../pages/Home"));
const CoinDetailsPage = lazy(() => import("../pages/CoinDetailsPage"));
import MyLoader  from "../PageLoader/PageLoader";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<MyLoader/>}>
              <Home />
            </Suspense>
            } />
          {/* index means this is the main page when the website is render */}
          <Route
            path="/details/:coinId"
            element={
              <Suspense fallback={<MyLoader/>}>
                <CoinDetailsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
