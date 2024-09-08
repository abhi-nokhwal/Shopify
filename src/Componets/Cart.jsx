import { Offcanvas } from "react-bootstrap";
import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  handleshowOff,
  removeFromCart,
} from "./ReduxStore/CartSlice";

function Cart() {
  const isAvailable = useSelector((state) => state.cart.isAvailable);
  const dispatch = useDispatch();
  const iteams = useSelector((state) => state.cart.iteams);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Offcanvas
        show={isAvailable}
        onHide={() => dispatch(handleshowOff())}
        placement="end"

        //   responsive="lg"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            {iteams && iteams.length > 0 ? (
              iteams.map((item) => (
                <div>
                  <div className="row border-bottom ">
                    <div>
                      <img
                        src={item.image}
                        className="img-fluid  text-center d-flex mx-auto pt-3 "
                        width={100}
                        height={100}></img>
                    </div>

                    <div className="">
                      <p className=" w-100 text-center  mt-3">${item.price}</p>
                      {/* <p className="text-center">{item.title}</p> */}
                      <div className="d-flex justify-content-center  w-100">
                        <button
                          className="btn btn-outline-dark rounded-0 py-1  mb-5"
                          onClick={() => dispatch(addToCart(item))}>
                          +
                        </button>
                        <h4 className="px-3 text-center">{item.quantity}</h4>
                        <button
                          className="btn btn-outline-dark rounded-0 py-1 px-3 mb-5"
                          onClick={() => dispatch(removeFromCart(item.id))}>
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Your cart is empty</p>
            )}
            {iteams.length == 0 ? null : (
              <p className="text-center mt-5">
                TotalAmount:${totalAmount.toFixed(2)}
              </p>
            )}
            {/* <p>${totalAmount.toFixed(2)}</p> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
