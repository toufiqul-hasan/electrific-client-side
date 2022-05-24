import React from "react";
import useProducts from "../../Hooks/useProducts";
import Loading from "../../Shared/Loading";
import FeaturedTool from "./FeaturedTool";

const FeaturedTools = () => {
  const [products, loading] = useProducts([]);
  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="section-title mt-5 px-5">
          <h1 className="text-center text-3xl font-bold">Featured Tools</h1>
          <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <FeaturedTool
                key={product._id}
                product={product}
              ></FeaturedTool>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedTools;