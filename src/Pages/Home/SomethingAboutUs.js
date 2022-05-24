import React from "react";
import { Link } from "react-router-dom";
import chart from "../../Assets/Images/chart.png";

const SomethingAboutUs = () => {
  return (
    <div className="mt-20 p-5 bg-base-200 section-title">
      <h1 className="text-3xl font-bold text-center mt-10">Something About Us</h1>
      <div className="hero mt-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chart} alt="" />
          <div className="text-justify">
            <h1 className="text-xl font-bold mt-10">
              We are leading company in this field. We provide specific
              solutions for our every customers.
            </h1>
            <p>
              When you give to our charity, know your donation is making a
              difference Whether you are supporting one our signature programs
              or our carefully curated list of gifts that give more, our
              professional staff. Electrific partner with over 320 amazing
              projects worldwide and have given over $10 million product.
            </p>
            <p>
              We partner with over 320 amazing tech projects worldwide and have
              given over $15 million in cash and product grants to other groups.
            </p>
            <Link to="/blog">
              <button className="btn btn-primary mt-5 text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomethingAboutUs;