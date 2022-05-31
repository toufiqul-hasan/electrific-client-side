import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-20 text-justify">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            1.How will you improve the performance of a React Application?
          </h2>
          <p>
            Answer: There are many ways to improve the performance of a React
            Application. Some of them are: <br />
            1.Lazy loading images to prevent the creation of inessential DOM
            nodes which will boosting the performance. <br />
            2.Try to use React.memo() which is used for memoizing or caching
            functional components. <br />
            3.Try to useMemo() hook which is used for caching CPU expensive
            functions. <br />
            4.Try to Keep component state local where necessary. <br />
            5.Try to avoid use any kind of anonymous functions.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            2.What are the different ways to manage a state in a React
            Application?
          </h2>
          <p>
            Answer: There are mainly four types of state need to be properly
            managed in React Application. They are: <br />
            1.Local State <br />
            2.Global State <br />
            3.Server State <br />
            4.URL State
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            3.How does prototypical inheritance work?
          </h2>
          <p>
            Answer: The prototypal inheritance is a characteristic in javascript
            used to add methods and properties in objects. It is a technique by
            which an object can inherit the properties and methods of another
            object. Generally, in order to get and set the prototype of an
            object, we use Object.getPrototypeOf and Object.setPrototypeOf.
            Currently, in modern language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            4.Why you do not set the state directly in React? For example, if
            you have const [ products, setProducts ] = useState( [ ] ). Why you
            do not set products = [ ... ] instead, you use the setProducts?
          </h2>
          <p>
            Answer: We should not set the state directly because these following
            reasons: <br />
            1.If we set it directly, calling the setState( ) afterward may just
            replace the update we made. <br />
            2.When we directly set the state, it doesn't change state
            immediately. Alternatively, it generate a pending state transition &
            accessing it after calling this method will only return the present
            value. <br />
            3.We will lose the control of the state across all components.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            5.You have an array of products. Each object has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p>
            Answer: I will use array filter( ) method. The filter( ) method
            returns a new array of all the values in an array that matches the
            conditions of a function. If there is no match, the method returns
            an empty array.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            6.What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Answer: Unit test: This is a type of testing which is done by
            software developers in which the smallest testable module of an
            application like interfaces, procedures or functions are tested to
            calculate if they are suitable to use. <br />
            We should write unit tests because it's ensures that all code meets
            quality standards before it's used. This ensures a dependable
            engineering environment where quality is main priority. Over the
            time of the software development life cycle (SDLC), unit testing
            saves time & money and helps developers write better code more
            efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;