import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Quote from "./Quote";
import WhyChooseUs from "./WhyChooseUs";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div className="mt-16">
      <div>
        <Banner />
      </div>
      <div className="mt-10">
        <BusinessSummary />
      </div>
      <div>
        <WhyChooseUs />
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