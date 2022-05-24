import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="section-title">
      <h1 className="text-3xl font-bold text-center mt-20">What We Offer</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 mt-10">
        <div className="card card-side bg-primary text-white shadow-2xl h-24">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </figure>
          <div className="card-body mt-[-20px]">
            <h2 className="card-title">Free Shipping</h2>
            <p className="mt-[-5px]">We provide world wide free shipping</p>
          </div>
        </div>
        <div className="card card-side bg-secondary text-white shadow-2xl h-24">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
          </figure>
          <div className="card-body mt-[-20px]">
            <h2 className="card-title">100% Money Back</h2>
            <p className="mt-[-5px]">We provide 100% money back guarantee</p>
          </div>
        </div>
        <div className="card card-side bg-primary text-white shadow-2xl h-24">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </figure>
          <div className="card-body mt-[-20px]">
            <h2 className="card-title">Support 24/7</h2>
            <p className="mt-[-5px]">We provide Support 24/7 days support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;