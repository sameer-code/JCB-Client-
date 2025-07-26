// src/pages/Home.js
import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedStores from "@/components/FeaturedStores";
import FeaturedDeals from "@/components/FeaturedDeals";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <FeaturedStores />
      <FeaturedDeals />
      <Categories />
      <HowItWorks />
    </div>
  );
};

export default Home;
