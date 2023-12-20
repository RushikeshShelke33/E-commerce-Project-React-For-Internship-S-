import React from "react";
import Navbar from "./Navbar";
import CategoryHomePage from "./CategoryHomePage";
import Footer from "./Footer";
import ProductHomepage from "./ProductHomepage";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <CategoryHomePage />
      <ProductHomepage />
      <Footer />
    </>
  );
};

export default HomePage;
