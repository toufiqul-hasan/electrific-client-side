import React from "react";
import error404 from "../../Assets/Images/error404.gif";
import "./NotFound.css";

const NotFound = () => {

  return (
    <div className="not-found mt-10">
      <img src={error404} alt="Page Not Found" />
    </div>
  );
};

export default NotFound;