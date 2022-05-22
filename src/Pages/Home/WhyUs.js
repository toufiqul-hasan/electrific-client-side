import React from "react";
import chart from "../../Assets/Images/chart.png";

const WhyUs = () => {
  return (
    <div className="mt-20 p-5 bg-base-200">
      <h1 className="text-3xl font-bold text-center mt-10">Why Us</h1>
      <div className="hero mt-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chart} alt="" />
          <div>
            <h1 className="text-xl font-bold mt-10">
              We are leading company in this field, We provide specific
              solutions for our every customers.
            </h1>
            <p>
              When you give to Our Charity, know your donation is making a
              difference Whether you are supporting one our Signature Programs
              or our carefully curated list of Gifts That Give More, our
              professional staff. Manufactory partner with over 320 amazing
              projects worldwide, and have given over $150 million product.
            </p>
            <p>
              We partner with over 320 amazing ut projects worldwide, and have
              given over $150 million in cash and product grants to other
              groups.
            </p>
            <button className="btn btn-primary mt-5 text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;