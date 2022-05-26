import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Quote from "./Quote";
import WhatWeOffer from "./WhatWeOffer";
import SomethingAboutUs from "./SomethingAboutUs";
import UserReviews from "./UserReviews";
import FeaturedTools from "./FeaturedTools";
import "./Home.css";

const Home = () => {

  return (
    <div className="mt-16">
      <div>
        <Banner />
      </div>
      <div>
        <FeaturedTools />
      </div>
      <div>
        <WhatWeOffer />
      </div>
      <div>
        <SomethingAboutUs />
      </div>
      <div>
        <BusinessSummary />
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