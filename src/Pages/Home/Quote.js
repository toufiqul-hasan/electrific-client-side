import React from "react";
import { toast } from "react-toastify";
import quote from "../../Assets/Images/quote.png";

const Quote = () => {
  const notify = () => toast.success("We will contact you soon!");
  const handleQuote = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div className="py-10 px-10">
      <h1 className="text-3xl font-bold text-center py-10">Request A Quote</h1>
      <div className="card lg:card-side drop-shadow py-10 2xl:pl-96">
        <figure>
          <img className="px-10" src={quote} alt="" />
        </figure>
        <form className="card-body justify-center" onSubmit={handleQuote}>
          <input
            type="text"
            placeholder="Tools Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Quantity"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div>
            <button className="btn btn-primary text-white" onClick={notify}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
