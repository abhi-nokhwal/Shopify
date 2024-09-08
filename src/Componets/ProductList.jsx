import React, { useEffect, useState } from "react";
import { addToCart, handleshowOn } from "./ReduxStore/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductList() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.iteams);

  useEffect(() => {
    const GetData = async () => {
      try {
        const Response = await fetch("https://fakestoreapi.com/products");
        const ResponseJson = await Response.json();
        setData(ResponseJson);
        console.log(ResponseJson);
      } catch (error) {
        console.error(
          "Error because of fetching through low internet service",
          error
        );
      }
    };
    GetData();
  }, []);

  // let CartData = [];
  const QickHandler = (value) => {
    dispatch(handleshowOn());
    dispatch(addToCart(value));
    console.log(items);
  };
  return (
    <>
      <h1 className="text-center mt-5">PRODUCT</h1>
      {/* {data.map((item) => console.log(item))} */}
      {items > 0 ? items.map((item) => console.log(item)) : null}
      {/* 2. Ensure data is an array before mapping */}
      <div className="container">
        <div className="row  d-flex justify-content-around p-2">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="col-md-4 col-sm-6 col-lg-5 p-5  bg-white shadow-lg  text-center mt-5">
                <img
                  src={item.image}
                  className="img-fluid  mt-4"
                  width={100}
                  height={100}></img>
                <p className="text-center mt-3">{item.title}</p>
                <p>${item.price}</p>
                <button
                  className="btn btn-outline-dark rounded-0"
                  onClick={() => QickHandler(item)}>
                  SHOP NOW
                </button>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
