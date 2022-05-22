import React from "react";

const Portfolio = () => {
  return (
    <div className="container mx-auto my-14 text-left">
      <div className="card">
        <div className="card-body">
          <h2 className="text-2xl font-bold">Md. Toufiqul Hasan</h2>
          <p>
            <a
              target="_blank"
              href="mailto:touphiqul@gmail.com"
              rel="noreferrer"
            >
              touphiqul@gmail.com
            </a>
          </p>
          <p>Bachelor of Science in Computer Science and Engineering</p>
          <p className="text-xl">
            <b>Skills:</b>
          </p>
          <p>
            <b>Expert:</b> JavaScript, ES6, React, React Router, React
            Bootstrap, HTML, CSS, Bootstrap.
          </p>
          <p>
            <b>Comfortable:</b> Node.js, Express.js, MongoDB, Rest API, Context
            API, Firebase Authentication.
          </p>
          <p>
            <b>Familiar:</b> Tailwind CSS, JSON Web Token (JWT), Google Map,
            Wordpress.
          </p>
          <p>
            <b>Tools:</b> Git, Create React App, Visual Studio Code, Chrome Dev
            Tool, GitHub, Netlify, Firebase, Figma, Photoshop, Heroku.
          </p>
          <p className="text-xl">
            <b>Projects:</b>
          </p>
          <p>
            ►
            <a
              className="link-hover"
              target="_blank"
              href="https://electrific-bd.web.app"
              rel="noreferrer"
            >
              Electrific - Electrical Tools Manufacturer Website
            </a>
          </p>
          <p>
            ►
            <a
              className="link-hover"
              target="_blank"
              href="https://royal-auto-bd.web.app"
              rel="noreferrer"
            >
              Royal Auto - Car Warehouse Management Website
            </a>
          </p>
          <p>
            ►
            <a
              className="link-hover"
              target="_blank"
              href="https://dental-plus-dr.web.app"
              rel="noreferrer"
            >
              Dental Plus - Dental Treatment Website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
