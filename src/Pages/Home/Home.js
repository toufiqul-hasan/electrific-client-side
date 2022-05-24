import React from "react";
import "./Home.css";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Quote from "./Quote";
import WhyChooseUs from "./WhyChooseUs";
import AboutCompany from "./AboutCompany";
import UserReviews from "./UserReviews";

const Home = () => {
  return (
    <div className="mt-16">
      <div>
        <Banner />
      </div>
      <div>
        <BusinessSummary />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <AboutCompany />
      </div>
      <div>
        <UserReviews />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
};

export default Home;