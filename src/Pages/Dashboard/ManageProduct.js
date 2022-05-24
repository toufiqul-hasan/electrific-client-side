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
        <div className="mt-5">
          <div className="text-center text-2xl font-bold">
            <h1>Manage Product</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3 mb-10">
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
