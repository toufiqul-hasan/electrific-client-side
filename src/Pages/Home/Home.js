import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";

const Home = () => {
  return (
    <div className="py-16">
      <div>
        <Banner />
      </div>
      <div className="py-10 text-center">
        <BusinessSummary />
      </div>
    </div>
  );
};

export default Home;