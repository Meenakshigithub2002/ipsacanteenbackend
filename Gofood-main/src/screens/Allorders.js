import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Allorders = () => {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5000/allorders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });

    // await res.map((data)=>{
    //    console.log(data)
    // })
  };
  console.log(orderData);
  useEffect(() => {
    fetchMyOrder();
  }, []);

  const allOrders = [];
  const allPertiOrders = [];
  const odd = []
  if (orderData.length) {
    // orderData && orderData.map((oneUserOrder) => {
    //     console.log(oneUserOrder.order_data)
    //     allOrders.push(oneUserOrder.order_data)
    //     console.log("allOrders", allOrders);
    // })
    console.log(orderData);
    for (let i = 0; i < orderData.length; i++) {
      const element = orderData[i].order_data;
      element[0][1].email = orderData[i].email
      console.log(orderData[i])
      console.log(element)
      element.map((el) => {
        allOrders.push(el);
      });
    }

    for (let i = 0; i < allOrders.length; i++) {
      const element = allOrders[i];
      element.forEach((x, i) => {
        if (i % 2 == 0) {
          // even.push(x);
        } else {
          odd.push(x);
        }
      });
      // element.map((el) => {
      //   allPertiOrders.push(el);
      // });
    }
  }
  console.log(odd);
  const handleOrderComplete = (data) => {
    const confirmComplete = confirm("Order Completed?")
    console.log(confirmComplete)
    console.log(data.id);

  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="row">
          {odd &&
            odd.map((el, index) => {
              console.log(el)
              return (
                <>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div
                      className="card mt-3"
                      style={{
                        width: "16rem",
                        maxHeight: "560px",
                      }}
                    >
                      <div className="card-header ">
                        <div className="w-100 text-center text-dark">
                          {index + 1}
                        </div><hr />
                        <div><b>From :</b> {el.email}</div>
                      </div>

                      <img
                        src={el.img}
                        className="card-img-top"
                        alt="..."
                        style={{
                          height: "120px",
                          objectFit: "fill",
                        }}
                      />
                      <div className="card-body" style={{ height: "178px" }}>
                        <h5 className="card-title text-dark">{el.name}</h5><hr />
                        <div
                          className="container w-100 p-0"
                          style={{ height: "38px" }}
                        >
                          <span className="m-1 text-dark">({el.qty}</span>
                          <span className="m-1 text-dark">* {el.size})</span>
                          <div className="text-dark d-inline ms-2 h-100 w-20 fs-5">
                            ₹{el.price}/-
                          </div><hr />
                          <div className="w-100">
                            <button className="btn btn-outline-primary form-control " onClick={() => handleOrderComplete(el)} disabled>{el.orderNo}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Allorders;
