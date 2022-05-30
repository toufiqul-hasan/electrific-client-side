import React from "react";
import useProducts from "../../Hooks/useProducts";
import Loading from "../../Shared/Loading";
import FeaturedTool from "../Home/FeaturedTool";

const Shop = () => {
  
  const [products, loading] = useProducts([]);
  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="section-title my-10 px-5">
          <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-3">
            {products.map((product) => (
              <FeaturedTool key={product._id} product={product}></FeaturedTool>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;