import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Allorders = () => {
    const [usersData, setUsersData] = useState();
    const [orderData, setorderData] = useState();
    const [orderDataWUser, setorderDataWUser] = useState([]);

    const fetchMyOrder = async () => {
        // console.log(localStorage.getItem("userEmail"));
        await fetch("http://localhost:5000/allorders", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(async (res) => {
            let response = await res.json();
            // console.log(response)
            await setorderData(response[0].orders);
            await setUsersData(response[0].userdata);
        });

        // await res.map((data)=>{
        //    console.log(data)
        // })
    };
    // console.log(orderData);
    useEffect(() => {
        fetchMyOrder();
    }, []);
    // console.log(usersData)
    // console.log(orderData)
    const userWithOrder = []
    useEffect(() => {
        if (orderData) {
            for (let i = 0; i < orderData.length; i++) {
                const element = orderData[i];
                const email = element.email
                for (let i = 0; i < element.length; i++) {
                    const element = element[i];
                    console.log(element)
                }
            }
        }
        // orderData && orderData.map((el) => {
        //   // console.log(el)
        //   const email = el.email
        //   // console.log(email)
        //   for (let i = 0; i < usersData.length; i++) {
        //     const element = usersData[i];

        //     if (email === element.email) {
        //       // console.log("data", [element, el])
        //       // userWithOrder.push({ element, el })
        //       element.orderDatas = el
        //       // console.log(element)
        //       setorderDataWUser(element)
        //     }

        //   }
        // })
        // setorderDataWUser(userWithOrder)

    }, [orderData])
    console.log(orderDataWUser)
    const allOrders = [];
    const allPertiOrders = [];
    const odd = []
    // if (orderData.length) {
    //   // orderData && orderData.map((oneUserOrder) => {
    //   //     console.log(oneUserOrder.order_data)
    //   //     allOrders.push(oneUserOrder.order_data)
    //   //     console.log("allOrders", allOrders);
    //   // })
    //   console.log(orderData);
    //   for (let i = 0; i < orderData.length; i++) {
    //     const element = orderData[i].order_data;
    //     element.map((el) => {
    //       allOrders.push(el);
    //     });
    //   }

    //   for (let i = 0; i < allOrders.length; i++) {
    //     const element = allOrders[i];
    //     element.forEach((x, i) => {
    //       if (i % 2 == 0) {
    //         // even.push(x);
    //       } else {
    //         odd.push(x);
    //       }
    //     });
    //     // element.map((el) => {
    //     //   allPertiOrders.push(el);
    //     // });
    //   }
    // }
    // console.log(odd);
    return (
        <></>
        // <div>
        //   <div>
        //     <Navbar />
        //   </div>
        //   <div className="container">
        //     <div className="row">
        //       {odd &&
        //         odd.map((el, index) => {
        //           return (
        //             <>
        //               <div className="col-12 col-md-6 col-lg-3">
        //                 <div
        //                   className="card mt-3"
        //                   style={{
        //                     width: "16rem",
        //                     maxHeight: "360px",
        //                   }}
        //                 >
        //                   <div className="card-header ">
        //                     <div className="w-100 text-center text-dark">
        //                       {index + 1}
        //                     </div>
        //                   </div>
        //                   <img
        //                     src={el.img}
        //                     className="card-img-top"
        //                     alt="..."
        //                     style={{
        //                       height: "120px",
        //                       objectFit: "fill",
        //                     }}
        //                   />
        //                   <div className="card-body">
        //                     <h5 className="card-title text-dark">{el.name}</h5>
        //                     <div
        //                       className="container w-100 p-0"
        //                       style={{ height: "38px" }}
        //                     >
        //                       <span className="m-1 text-dark">{el.qty}</span>
        //                       <span className="m-1 text-dark">{el.size}</span>
        //                       {/* <span className="m-1 text-dark">
        //                                             {data}
        //                                         </span> */}
        //                       <div className="text-dark d-inline ms-2 h-100 w-20 fs-5">
        //                         ₹{el.price}/-
        //                       </div>
        //                     </div>
        //                   </div>
        //                 </div>
        //               </div>
        //             </>
        //           );
        //         })}
        //     </div>
        //   </div>
        //   <Footer />
        // </div>
    );
};

export default Allorders;
