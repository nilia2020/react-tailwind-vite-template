import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AppContext from "../context/AppContext";

const App = () => {
  return (
    <AppContext.Provider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
