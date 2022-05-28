import React from "react";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto rounded-3xl py-10 bg-base-100">
      <h2 className="text-center m-16 text-4xl"> Quastion Answers </h2>
      <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application ?
        </div>{" "}
        <div className="collapse-content">
          <p>
            1. By Keeping component state local where necessary. <br />
            2. Memoizing React components to prevent unnecessary re - renders.{" "}
            <br />
            3. Code - splitting in React using dynamic import () <br />
            4. Windowing or list virtualization in React. <br />
            5. Lazy loading images in React.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <br />
      <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application ?
        </div>{" "}
        <div className="collapse-content">
          <p>
            1. Local state. <br />
            2. Global state. <br />
            3. server state. <br />
            4. URL state. <br />
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <br />
      <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work ?
        </div>{" "}
        <div className="collapse-content">
          <p>
            Javascript has a mechanism called prototypal inheritance.It was used
            to create objects with methods and properties.It 's a technique that
            allows one object to inherit the attributes and methods of
            another.We traditionally use Object.getPrototypeOf and
            Object.setPrototypeOf to get and set the[[Prototype]] of an object.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <br />
      <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application ?
        </div>{" "}
        <div className="collapse-content">
          <p>
            1. By Keeping component state local where necessary. <br />
            2. Memoizing React components to prevent unnecessary re - renders.{" "}
            <br />
            3. Code - splitting in React using dynamic import () <br />
            4. Windowing or list virtualization in React. <br />
            5. Lazy loading images in React.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <br />
      <div
        tabindex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-10"
      >
        <div className="collapse-title text-xl font-medium">
          Why you do not set the state directly in React.For example, if you
          have const [products, setProducts] = useState([]).Why you do not set
          products = [...] instead, you use the setProducts ?
        </div>{" "}
        <div className="collapse-content">
          <p>
            It never updates the state directly since doing so may cause the
            modification to be overwritten if you execute setState() later.{" "}
          </p>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Blog;
