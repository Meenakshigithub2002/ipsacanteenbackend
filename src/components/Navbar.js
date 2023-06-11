/* eslint-disable react/jsx-no-undef */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { toast } from "react-toastify";
export default function Navbar(props) {
  const [cartView, setCartView] = useState(false);
  localStorage.setItem("temp", "first");
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/login");
    toast.success("see you soon!");
  };

  const loadCart = () => {
    setCartView(true);
  };
  const adminChek = localStorage.getItem("isAdmin");
  console.log(adminChek);

  let adMinroute;

  if (adminChek === true) {
    adMinroute = (
      <>
        <Link
          className="nav-link fs-5 mx-3 active"
          aria-current="page"
          to="/allorders"
        >
          All Orders
        </Link>
      </>
    );
  } else if (adminChek === false) {
    adMinroute = "no";
  }

  const deleteOrders = async () => {
    await fetch("http://localhost:5000/allordersdelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      toast.success("Orders Deleted");
      window.location.reload();
    });
  };
  const items = useCart();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark  position-sticky"
        style={{
          boxShadow: "0px 10px 20px black",
          filter: "blur(20)",
          position: "fixed",
          zIndex: "10",
          width: "100%",
          backgroundColor: "#0b325a",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 " to="/">
            <b> IPS Canteen</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 mx-3 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>{" "}
                {/* index.css - nav-link color white */}
              </li>
              {localStorage.getItem("token") ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link fs-5 mx-3 active"
                      aria-current="page"
                      to="/myorder"
                    >
                      My Orders
                    </Link>{" "}
                    {/* index.css - nav-link color white */}
                  </li>
                </>
              ) : (
                ""
              )}
              {adminChek === "true" ? (
                <>
                  <Link
                    className="nav-link fs-5 mx-3 active"
                    aria-current="page"
                    to="/addfooddata"
                  >
                    Add Product
                  </Link>
                </>
              ) : (
                ""
              )}
              {adminChek === "true" ? (
                <>
                  <Link
                    className="nav-link fs-5 mx-3 active"
                    aria-current="page"
                    to="/allorders"
                  >
                    All Orders
                  </Link>
                </>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link className="btn bg-white text-success mx-1 " to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-success mx-1" to="/signup">
                  Signup
                </Link>
              </form>
            ) : (
              <div>
                {adminChek === "true" ? (
                  <>
                    <div
                      className="btn bg-danger text-white mx-2 "
                      onClick={deleteOrders}
                    >
                      Delete Orders
                    </div>
                  </>
                ) : (
                  ""
                )}

                <div
                  className="btn bg-white text-success2 mx-2 "
                  onClick={loadCart}
                >
                  <Badge color="secondary" badgeContent={items.length}>
                    <ShoppingCartIcon color="red" />
                  </Badge>
                  Cart
                </div>

                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  ""
                )}

                <button
                  onClick={handleLogout}
                  className="btn bg-white text-success2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
