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
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th>Product Name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Available Quantity</th>
                  <th className="text-center">Order Quantity</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <ManageProducts
                    key={product._id}
                    index={index}
                    product={product}
                    reload={reload}
                    setReload={setReload}
                  ></ManageProducts>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageProduct;