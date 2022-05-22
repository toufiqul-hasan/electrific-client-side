import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Quote from "./Quote";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div className="py-16">
      <div>
        <Banner />
      </div>
      <div className="py-10">
        <BusinessSummary />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
};

export default Home;