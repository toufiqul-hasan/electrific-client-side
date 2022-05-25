import React from "react";
import useProducts from "../../Hooks/useProducts";
import ManageProducts from "./ManageProducts";
import Loading from "../../Shared/Loading";

const ManageProduct = () => {
  const [products, loading, reload, setReload] = useProducts([]);
  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <div className="text-2xl font-bold">
            <h1 className="text-center uppercase">Manage Product</h1>
          </div>
          <h2 className="text-center font-bold mb-4">
            Total Products: {products.length}
          </h2>
          <div className="grid grid-cols-1 mt-10 mb-5 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <ManageProducts
                key={product._id}
                product={product}
                reload={reload}
                setReload={setReload}
              ></ManageProducts>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ManageProduct;
